# PRODUCT-006 — Pricing Engine Core

**Task ID:** PRODUCT-006

**Sprint:** Product Platform Sprint 1

**Status:** Planned

**Priority:** High

---

# Goal

Implement the first version of Pricing Engine.

Pricing Engine calculates the complete financial model of an order.

No payment.

No Wallet operations.

No bonus write-off.

No UI.

---

# Read before implementation

- AGENTS.md
- PROJECT_MEMORY.md
- .codex/CODEX_PLAYBOOK.md
- docs/architecture/PRICING_ENGINE.md
- docs/architecture/CONFIGURATION_ENGINE.md
- docs/architecture/RECIPE_ENGINE.md
- docs/architecture/PROJECT_DECISIONS.md

---

# Create

frontend/miniapp/src/domain/pricing/

PricingEntity.js

PricingRepository.js

PricingService.js

PricingEngine.js

index.js

---

# Responsibilities

PricingEntity

Represents Pricing Result.

PricingRepository

Provides pricing rules.

PricingService

Receives Product + Configuration + Recipe.

Returns PricingEntity.

PricingEngine

Facade only.

Must extend PricingService.

---

# MVP Rules

Base price:

130 RUB

Included:

- syrup
- topping

Bonus rules

- bonusAllowed = true
- bonusNominalRate = 1
- maxBonusPercent = 80

PricingService must calculate

basePrice

bonusLimit

finalPrice

currency

No Wallet interaction.

No Payment interaction.

---

# Architecture Rules

Pricing Engine

MUST NOT

- use React
- use Browser APIs
- call Wallet
- call Payment
- call Machine
- modify customer balances
- perform accounting

---

# Allowed changes

frontend/miniapp/src/domain/pricing/*

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

Wallet Engine

Machine Engine

Notification Engine

---

# Build

Run

npm run build

Build must PASS.

---

# Deliverables

PricingEntity

PricingRepository

PricingService

PricingEngine

Architecture summary

Successful build

Future recommendations

---

# Acceptance Criteria

DDD structure preserved.

PricingEngine extends PricingService.

No UI changes.

No React dependency.

Build PASS.

---

# Commit Message

feat: add pricing engine core

---

# Report

Changed files

Architecture Summary

Build Result

Future recommendations