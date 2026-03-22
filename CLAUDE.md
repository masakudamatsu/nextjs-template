# Memory Bank

My memory resets completely between sessions. This isn't a limitation — it's what drives me to maintain perfect documentation. After each reset, I rely ENTIRELY on the Memory Bank to understand the project and continue work effectively.

I MUST read ALL memory bank files at the start of EVERY task.

## Memory Bank Structure

The Memory Bank consists of required core files and optional context files, all stored in `memory-bank/`:

### Core Files (Required)

| File                | Purpose                                                          |
| ------------------- | ---------------------------------------------------------------- |
| `projectbrief.md`   | Foundation document: core requirements, goals, project scope     |
| `productContext.md` | Why this project exists, problems it solves, UX goals            |
| `activeContext.md`  | Current work focus, recent changes, next steps, active decisions |
| `systemPatterns.md` | Architecture, design patterns, component relationships           |
| `techContext.md`    | Tech stack, dev setup, constraints, dependencies                 |
| `progress.md`       | What works, what's left, current status, known issues            |

### Additional Context

Create additional files/folders within `memory-bank/` as needed:

- Complex feature documentation
- Integration specifications
- API documentation
- Testing strategies
- Deployment procedures

## When to Update Memory Bank

- Discovering new project patterns
- After implementing significant changes
- When user requests with "update memory bank" (MUST review ALL files)
- When context needs clarification

## Documentation Lookup

Before installing or configuring any tool, always query Context7 for the official documentation first:

1. Call `resolve-library-id` with the library name and a short description of the task
2. Call `query-docs` with the returned library ID and a specific question

This ensures all setup steps are based on current docs rather than training data.

## Prettier

Prettier is pinned to an exact version (no `^`). To upgrade:

```bash
npm install --save-dev --save-exact prettier@latest
```

## Cross-Project Context

This project is part of the `~/ClaudeCode` workspace. See the root `CLAUDE.md` for cross-project relationships.
