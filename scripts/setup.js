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

  // Step 7: Copy .env.local.example → .env.local so the dev server works out of the box.
  // Skip if .env.local already exists (e.g. re-running setup).
  const envExamplePath = path.join(root, '.env.local.example')
  const envLocalPath = path.join(root, '.env.local')
  if (fs.existsSync(envExamplePath) && !fs.existsSync(envLocalPath)) {
    fs.copyFileSync(envExamplePath, envLocalPath)
    console.log('Copied .env.local.example → .env.local')
  }

  // Step 8: Delete this script — it's a one-time setup tool and is no longer
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
