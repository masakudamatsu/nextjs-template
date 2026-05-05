'use strict'
const fs = require('node:fs')
const path = require('node:path')
const { createInterface } = require('node:readline/promises')

const root = path.join(__dirname, '..')
const memoryBankDir = path.join(root, 'memory-bank')

async function main() {
  // Step 1: Prompt for package.json fields
  const rl = createInterface({ input: process.stdin, output: process.stdout })
  const nameInput = (await rl.question('App name [my-nextjs-app]: ')).trim()
  const name = nameInput || 'my-nextjs-app'
  const descriptionInput = (await rl.question('Description []: ')).trim()
  const description = descriptionInput || ''
  const authorInput = (
    await rl.question('Author [Masa Kudamatsu <masakudamatsu@gmail.com>]: ')
  ).trim()
  const author = authorInput || 'Masa Kudamatsu <masakudamatsu@gmail.com>'
  rl.close()

  // Step 2: Replace the template's name/description with the user's app details,
  // and reset version to 1.0.0 so Semantic Release starts fresh for the new repo.
  const pkgPath = path.join(root, 'package.json')
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
  pkg.name = name
  pkg.description = description
  pkg.version = '1.0.0'
  pkg.author = author
  delete pkg.scripts.setup
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
  console.log(
    `Updated package.json (name: "${name}", author: "${author}", version reset to 1.0.0)`,
  )

  // Step 3: Delete only the project-specific memory-bank files.
  // systemPatterns.md and techContext.md are kept (the Setup Script section
  // is removed in Step 6).
  const toDelete = [
    'projectbrief.md',
    'productContext.md',
    'activeContext.md',
    'progress.md',
  ]
  for (const entry of toDelete) {
    const filePath = path.join(memoryBankDir, entry)
    if (fs.existsSync(filePath)) {
      fs.rmSync(filePath)
      console.log(`Deleted memory-bank/${entry}`)
    }
  }

  // Step 4: Move projectbrief-sample.md → memory-bank/projectbrief.md
  const briefSrc = path.join(root, 'projectbrief-sample.md')
  if (fs.existsSync(briefSrc)) {
    fs.renameSync(briefSrc, path.join(memoryBankDir, 'projectbrief.md'))
    console.log('Moved projectbrief-sample.md → memory-bank/projectbrief.md')
  } else {
    console.log('projectbrief-sample.md not found — skipping (already moved?)')
  }

  // Step 5: Move CLAUDE-sample.md → CLAUDE.md
  const claudeSrc = path.join(root, 'CLAUDE-sample.md')
  const claudeDest = path.join(root, 'CLAUDE.md')
  if (fs.existsSync(claudeSrc)) {
    fs.rmSync(claudeDest, { force: true })
    fs.renameSync(claudeSrc, claudeDest)
    console.log('Moved CLAUDE-sample.md → CLAUDE.md')
  } else {
    console.log('CLAUDE-sample.md not found — skipping (already moved?)')
  }

  // Step 6: Remove the Setup Script section from techContext.md — it only
  // applies while working on the template itself, not on the forked project.
  const techContextPath = path.join(memoryBankDir, 'techContext.md')
  if (fs.existsSync(techContextPath)) {
    const techContext = fs.readFileSync(techContextPath, 'utf8')
    const updated = techContext.replace(
      /\n### Setup Script[\s\S]*?(?=\n##|\n###|$)/,
      '',
    )
    fs.writeFileSync(techContextPath, updated)
    console.log('Removed Setup Script section from memory-bank/techContext.md')
  }

  // Step 7: Append the Test-Driven Development section to systemPatterns.md.
  // This section is not present in the template itself (it only applies to real
  // projects), so it is injected here rather than kept in the source file.
  const systemPatternsPath = path.join(memoryBankDir, 'systemPatterns.md')
  if (fs.existsSync(systemPatternsPath)) {
    const tddSection = `
---

## Test-Driven Development

TDD is the required development workflow for all new features and bug fixes. The three phases must be followed in order — no exceptions.

### The Three Phases

1. **Red** — Write a test that describes the desired behaviour. Run it and confirm it fails. If it passes without any implementation, the test is wrong — fix it before proceeding.
2. **Green** — Write the minimum implementation code that makes the failing test pass. Do not add anything beyond what the test requires.
3. **Refactor** — Improve code readability, structure, and clarity without changing behaviour. Re-run the tests after every change to confirm they still pass.

**Never write implementation code before a failing test exists.** If you find yourself writing a component, function, or server action without a corresponding failing test, stop and write the test first.

### Which Test Type to Use

**Default to Playwright e2e tests.** They test the user experience directly and remain valid even when the implementation changes underneath. A refactor that rewrites a component's internals should not require rewriting the tests.

**Use Vitest unit tests when:**
- They can catch a specific bug more efficiently than an e2e test (e.g., a pure function with many edge cases that would be slow or awkward to drive through the browser)
- The code under test requires mocking external modules — Vitest's module mocking is well-suited for this; Playwright is not

When in doubt, prefer the e2e test.

### Scope

TDD applies to: all new UI features, server actions, API route handlers, utility functions, and bug fixes.

TDD does not apply to: configuration files, database schema migrations, documentation, and memory bank updates.
`
    fs.appendFileSync(systemPatternsPath, tddSection)
    console.log(
      'Appended Test-Driven Development section to memory-bank/systemPatterns.md',
    )
  }

  // Step 8: Copy .env.local.example → .env.local so the dev server works out of the box.
  // Skip if .env.local already exists (e.g. re-running setup).
  const envExamplePath = path.join(root, '.env.local.example')
  const envLocalPath = path.join(root, '.env.local')
  if (fs.existsSync(envExamplePath) && !fs.existsSync(envLocalPath)) {
    fs.copyFileSync(envExamplePath, envLocalPath)
    console.log('Copied .env.local.example → .env.local')
  }

  // Step 9: Restore dry_run: true in release.yml so the forked repo starts in
  // test mode. The user can set it to false when ready to publish real releases.
  const releasePath = path.join(root, '.github/workflows/release.yml')
  if (fs.existsSync(releasePath)) {
    const release = fs.readFileSync(releasePath, 'utf8')
    const updatedRelease = release.replace('dry_run: false', 'dry_run: true')
    fs.writeFileSync(releasePath, updatedRelease)
    console.log('Restored dry_run: true in .github/workflows/release.yml')
  }
  if (fs.existsSync(techContextPath)) {
    const techContext = fs.readFileSync(techContextPath, 'utf8')
    const updatedTechContext = techContext.replace(
      '- `dry_run: false` in the workflow (template repo publishes real releases); `setup.js` restores it to `true` on fork so the new repo starts in test mode',
      '- `dry_run: true` set in the workflow action\'s `with` block — test mode; set to `false` when ready to publish real releases',
    )
    fs.writeFileSync(techContextPath, updatedTechContext)
    console.log('Updated dry_run description in memory-bank/techContext.md')
  }

  // Step 10: Delete this script — it's a one-time setup tool and is no longer
  // needed once the fork is initialized. Node.js has already loaded it into
  // memory, so deleting the file mid-execution is safe.
  fs.rmSync(__filename)

  console.log('\nSetup complete!')
  console.log('What to do next:')
  console.log(
    '→ Fill in memory-bank/projectbrief.md with your project details.',
  )
  console.log('→ Review CLAUDE.md and add any project-specific notes.')
}

main()
