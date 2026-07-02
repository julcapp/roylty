# Soft ICE Platform

# Architecture Baseline 1.0

**Статус:** Approved Baseline

**Версия:** 1.0

---

# 1. Vision

Soft ICE Platform является инженерной платформой управления конфигурируемыми продуктами.

Первичной предметной областью является продажа мягкого мороженого, однако архитектура не ограничивается данной категорией товаров.

Любой продукт платформы должен быть описан через единую модель продукта и может быть реализован без изменения базовой архитектуры.

---

# 2. Главный принцип

Платформа проектируется не вокруг вендингового автомата.

Платформа проектируется вокруг продукта.

Любой интерфейс является только способом взаимодействия с Product Platform.

---

# 3. Архитектурные принципы

Используется DDD Lite.

Каждый домен полностью независим.

Каждый Engine отвечает только за собственную ответственность.

Взаимодействие выполняется только через официальные модели платформы.

---

# 4. Domain Standard

Каждый домен имеет одинаковую структуру.

```text
Domain

Entity

Repository

Service

Engine
```

---

# 5. Product Flow

```
Catalog

↓

Configuration

↓

Recipe

↓

Pricing

↓

Wallet

↓

Payment

↓

Machine

↓

Notification
```

Ни один Engine не нарушает последовательность обработки заказа.

---

# 6. Engine Responsibilities

Catalog Engine

Источник данных о продукте.

Configuration Engine

Проверка допустимой конфигурации.

Recipe Engine

Построение технологического рецепта.

Pricing Engine

Расчёт финансовой модели заказа.

Wallet Engine

Управление внутренними балансами.

Payment Engine

Приём платежей.

Machine Engine

Управление оборудованием.

Notification Engine

Коммуникация с пользователем.

---

# 7. Engineering Standards

ES-001

Standard Domain Structure

ES-002

Domain Naming Standard

ES-003

Engine Interaction

ES-004

Repository Rules

ES-005

Documentation Rules

---

# 8. Naming Standard

Используются только полные названия.

Например

CatalogEngine

ConfigurationEngine

RecipeEngine

PricingEngine

WalletEngine

PaymentEngine

MachineEngine

NotificationEngine

---

# 9. Domain Contracts

Все Engine взаимодействуют через официальные Contracts.

```
domain/contracts/
```

Contracts определяют формат обмена между модулями.

---

# 10. Platform Core

Будущая инфраструктура платформы.

```
platform/

contracts/

events/

logging/

telemetry/

validation/

security/

identity/

configuration/

feature_flags/
```

Platform Core не зависит от предметной области.

---

# 11. Business Principles

1 бонус = право на скидку номиналом 1 рубль.

Бонусы не являются денежными средствами.

Wallet хранит внутренние балансы платформы.

Pricing рассчитывает стоимость.

Payment выполняет оплату.

Machine управляет оборудованием.

---

# 12. Цель развития

Soft ICE Platform должна позволять запуск новых категорий продуктов без изменения архитектуры.

Новые продукты должны подключаться через конфигурацию и доменные модели.

---

# 13. Roadmap

Phase 1

Product Platform

✔ Catalog

✔ Configuration

✔ Recipe

✔ Pricing

Phase 2

Finance Platform

Wallet

Bonus

Payment

Ledger

Phase 3

Machine Platform

Machine Engine

Hardware Layer

Device Adapter

Phase 4

CRM Platform

Customer

Seller

Operator

Analytics

Phase 5

AI Platform

Recommendation Engine

Demand Forecast

Inventory AI

Marketing AI

Conversation AI

---

# 14. Definition of Done

Любой новый модуль считается завершённым только если:

имеет документацию;

имеет Entity;

имеет Repository;

имеет Service;

имеет Engine;

имеет запись в CHANGELOG;

имеет запись в ENGINEERING_JOURNAL;

проходит Build;

не нарушает Architecture Baseline.

---

# Architecture Baseline 1.0

Утверждено как официальный фундамент проекта Soft ICE Platform.