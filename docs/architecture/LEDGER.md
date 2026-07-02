# Ledger

**Статус:** Draft

**Версия:** 0.1

---

# Назначение

Ledger является неизменяемым журналом всех финансовых операций платформы.

Ledger никогда не изменяет существующие записи.

Ledger никогда не удаляет записи.

Любая корректировка оформляется новой операцией.

---

# Архитектурная роль

Transaction

↓

Ledger

↓

Wallet Projection

↓

Accounting Adapter

---

# Главный принцип

Ledger является единственным источником финансовой истории платформы.

Wallet является только текущим представлением состояния.

---

# Ledger Entry

Каждая запись должна содержать:

id

transactionId

walletId

customerId

operationType

currency

debit

credit

balanceBefore

balanceAfter

referenceId

status

createdAt

metadata

---

# Operation Types

SALE

REFUND

PAYMENT

BONUS_ACCRUAL

BONUS_REDEMPTION

BONUS_EXPIRATION

DEPOSIT

WITHDRAW

ADJUSTMENT

CASHBACK

GIFT

PROMOTION

---

# Правила

Ledger:

не изменяет Wallet

не изменяет Bonus

не выполняет оплату

не рассчитывает стоимость

не выполняет бизнес-логику

не взаимодействует с UI

---

# Долгосрочная цель

Позволить восстановить финансовое состояние платформы на любой момент времени исключительно по журналу операций.