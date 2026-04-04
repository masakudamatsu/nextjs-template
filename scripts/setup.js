'use strict'
const fs = require('node:fs')
const path = require('node:path')

const root = path.join(__dirname, '..')
const memoryBankDir = path.join(root, 'memory-bank')

// Step 1: Delete only the project-specific memory-bank files.
// systemPatterns.md and techContext.md are kept — they describe the
// inherited tech stack and remain accurate for any fork.
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

// Step 2: Move projectbrief-sample.md → memory-bank/projectbrief.md
const briefSrc = path.join(root, 'projectbrief-sample.md')
if (fs.existsSync(briefSrc)) {
  fs.renameSync(briefSrc, path.join(memoryBankDir, 'projectbrief.md'))
  console.log('Moved projectbrief-sample.md → memory-bank/projectbrief.md')
} else {
  console.log('projectbrief-sample.md not found — skipping (already moved?)')
}

// Step 3: Move CLAUDE-sample.md → CLAUDE.md
const claudeSrc = path.join(root, 'CLAUDE-sample.md')
const claudeDest = path.join(root, 'CLAUDE.md')
if (fs.existsSync(claudeSrc)) {
  fs.rmSync(claudeDest, { force: true })
  fs.renameSync(claudeSrc, claudeDest)
  console.log('Moved CLAUDE-sample.md → CLAUDE.md')
} else {
  console.log('CLAUDE-sample.md not found — skipping (already moved?)')
}

console.log('\nSetup complete!')
console.log('→ Fill in memory-bank/projectbrief.md with your project details.')
console.log('→ Review CLAUDE.md and add any project-specific notes.')
