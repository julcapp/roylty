# FINANCE-001 — Finance Core Architecture

**Task ID:** FINANCE-001

**Sprint:** Finance Platform Sprint 1

**Status:** Planned

**Priority:** Critical

---

# Goal

Design the Financial Core of Soft ICE Platform.

This task establishes the architecture for all financial operations.

No payment gateway integration.

No UI.

No Telegram.

No CRM.

Only architecture and domain model.

---

# Architecture References

Read before implementation:

- AGENTS.md
- PROJECT_MEMORY.md
- docs/architecture/ARCHITECTURE_BASELINE_1_0.md
- docs/architecture/FINANCE_PLATFORM.md
- docs/architecture/PROJECT_DECISIONS.md

---

# Financial Core Scope

Design the following domains:

- Wallet
- Ledger
- Transaction
- Bonus
- Discount
- Gift
- Cashback
- Promotion

---

# Core Principles

Financial operations are immutable.

Balances are derived from transactions.

No module modifies balances directly.

Every balance change must be represented by a transaction.

---

# Wallet Responsibilities

Wallet stores balances only.

Wallet never calculates prices.

Wallet never performs payments.

Wallet never communicates with accounting systems.

---

# Ledger Responsibilities

Ledger is the immutable journal of financial events.

Ledger stores:

- deposits;
- purchases;
- refunds;
- bonus accrual;
- bonus redemption;
- bonus expiration;
- cashback;
- gifts;
- adjustments.

---

# Bonus Principles

Business rule:

1 Bonus Point = right to receive a discount with a nominal value of 1 RUB.

Bonus Points are NOT money.

Bonus expiration rules belong to Bonus Engine.

---

# Payment Principles

Payment Engine performs payment only.

Supported providers (future):

- YooKassa
- SBP
- Bank Card

Payment Engine never modifies Wallet directly.

---

# Accounting

Accounting integration is performed only through Accounting Adapter.

Financial Core never communicates directly with ERP or accounting software.

---

# Events

Every financial operation generates an event.

Examples:

WalletDeposited

BonusAccrued

BonusRedeemed

PaymentCompleted

PaymentFailed

BonusExpired

WalletBalanceChanged

RefundCompleted

---

# Future Deliverables

Wallet Engine

Ledger Engine

Bonus Engine

Payment Engine

Accounting Adapter

Notification integration

---

# Acceptance Criteria

Financial architecture documented.

Responsibilities clearly separated.

Immutable transaction model adopted.

Architecture Baseline 1.0 respected.

No implementation in this task.