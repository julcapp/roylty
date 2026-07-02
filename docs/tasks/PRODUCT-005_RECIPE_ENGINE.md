# PRODUCT-005 — Recipe Engine Core

**Task ID:** PRODUCT-005

**Sprint:** Product Platform Sprint 1

**Status:** Planned

**Priority:** High

---

# Goal

Implement the first version of Recipe Engine.

Recipe Engine transforms a validated product configuration into a machine-independent recipe.

No machine commands.

No UI.

No pricing.

---

# Architecture References

Read before implementation:

- AGENTS.md
- PROJECT_MEMORY.md
- .codex/CODEX_PLAYBOOK.md
- docs/architecture/RECIPE_ENGINE.md
- docs/architecture/CONFIGURATION_ENGINE.md
- docs/architecture/PROJECT_DECISIONS.md

---

# Create

frontend/miniapp/src/domain/recipe/

RecipeEntity.js

RecipeRepository.js

RecipeService.js

index.js

---

# Responsibilities

RecipeEntity

Represents a complete recipe.

RecipeRepository

Provides recipe definitions.

RecipeService

Receives ConfigurationEntity.

Returns RecipeEntity.

Validates recipe compatibility.

---

# Rules

Recipe Engine

MUST NOT

- know React
- know UI
- know Telegram
- know Browser APIs
- calculate pricing
- communicate with vending machines

---

# Allowed changes

frontend/miniapp/src/domain/recipe/*

CHANGELOG.md

ENGINEERING_JOURNAL.md

PROJECT_DECISIONS.md

---

# Forbidden

App.jsx

pages/

components/

styles/

assets/

analytics/

Machine Engine

Pricing Engine

---

# Build

Run

npm run build

Build must pass.

---

# Deliverables

RecipeEntity

RecipeRepository

RecipeService

Module exports

Architecture summary

Successful build

---

# Acceptance Criteria

Recipe Engine isolated.

No React dependency.

No UI changes.

Configuration Engine integration prepared.

Build PASS.

---

# Commit Message

feat: add recipe engine core

---

# Report

Changed files

Architecture Summary

Build result

Future recommendations