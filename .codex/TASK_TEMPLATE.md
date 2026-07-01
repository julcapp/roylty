# Codex Engineering Task Template

## Task ID

TASK-XXX

---

## Sprint

Sprint X.X

---

## Goal

Describe the business goal.

---

## Context

Before implementation, always read:

- AGENTS.md
- PROJECT_MEMORY.md
- CHANGELOG.md
- Architecture documents
- Domain documents

---

## Files to modify

List exact files.

Example:

frontend/miniapp/src/data/*
frontend/miniapp/src/services/*

---

## Files NOT to modify

backend/*
telegram-bot/*
infrastructure/*

Unless explicitly requested.

---

## Requirements

- Follow AGENTS.md
- Never hardcode business data
- Keep UI independent from business logic
- Keep code reusable
- Preserve existing functionality

---

## Acceptance Criteria

- Build passes
- No console errors
- No duplicated logic
- Documentation updated if required

---

## Build

```bash
cd frontend/miniapp
npm run build
```

---

## Definition of Done

- Build successful
- Code reviewed
- Documentation updated
- CHANGELOG updated
- Ready for Pull Request