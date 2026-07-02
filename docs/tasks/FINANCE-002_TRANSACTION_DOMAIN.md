# FINANCE-002 — Transaction Domain

Статус: Draft

Приоритет: Critical

Sprint: Financial Core

---

# 1. Business Goal

Реализовать единый Transaction Domain как источник всех финансовых операций платформы.

Любое финансовое изменение должно оформляться исключительно через Transaction.

Запрещается изменять Wallet, Bonus, Discount или Ledger напрямую.

---

# 2. Архитектура

Transaction является первым финансовым объектом платформы.

Он создается:

Pricing Engine
↓

Transaction

↓

Ledger

↓

Wallet

↓

Accounting

---

# 3. Domain Rules

Transaction является неизменяемым объектом.

После создания операция никогда не изменяется.

Допускаются только новые компенсирующие операции.

Transaction должен содержать:

id

type

status

customerId

productId

walletId

currency

amount

bonusAmount

discountAmount

createdAt

source

referenceId

---

# 4. Transaction Types

SALE

REFUND

BONUS_ACCRUAL

BONUS_SPENDING

WALLET_DEPOSIT

WALLET_WITHDRAW

PAYMENT

CORRECTION

---

# 5. Transaction Status

NEW

PENDING

COMPLETED

FAILED

CANCELLED

---

# 6. Codex Tasks

Создать новый домен:

frontend/miniapp/src/domain/finance/transaction/

Создать:

TransactionEntity.js

TransactionRepository.js

TransactionService.js

TransactionEngine.js

index.js

Repository должен хранить тестовые операции.

Service должен работать только через Repository.

Engine должен быть façade.

UI изменять запрещено.

Build обязателен.

---

# 7. Acceptance Criteria

✓ Build проходит

✓ UI не изменяется

✓ Transaction неизменяем

✓ Repository содержит примеры операций

✓ Engine не содержит бизнес-логики

✓ Service использует Repository

✓ Все операции проходят через Transaction