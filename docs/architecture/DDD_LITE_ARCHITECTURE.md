# DDD Lite Architecture

Статус: Draft
Версия: 0.1
Проект: Soft ICE Platform / «У Тимоши»

## 1. Назначение

Документ фиксирует переход Soft ICE Platform на облегчённую доменную архитектуру DDD Lite.

Цель: разделить бизнес-логику по предметным областям и не допустить превращения проекта в набор разрозненных сервисов.

## 2. Главный принцип

```text
UI не содержит бизнес-логику.
Domain не зависит от React.
Infrastructure не содержит правил бизнеса.
```

## 3. Новая структура frontend/miniapp/src

```text
frontend/miniapp/src/
├── app/
├── pages/
├── screens/
├── components/
├── domain/
│   ├── catalog/
│   ├── pricing/
│   ├── media/
│   ├── recipe/
│   ├── order/
│   ├── loyalty/
│   └── customer/
├── shared/
│   ├── constants/
│   ├── utils/
│   ├── errors/
│   └── config/
├── analytics/
└── consent/
```

## 4. Предметные области

### 4.1 Catalog

Отвечает за продукты, вкусы, сиропы, топпинги и доступность.

```text
domain/catalog/
├── catalogData.js
├── CatalogService.js
└── CatalogRepository.js
```

### 4.2 Pricing

Отвечает за цены, доплаты, скидки, будущие бонусы и акции.

```text
domain/pricing/
├── priceData.js
├── PriceEngine.js
└── PriceRepository.js
```

### 4.3 Media

Отвечает за выбор изображений продукта и fallback-логику.

```text
domain/media/
├── mediaData.js
├── MediaService.js
└── MediaRepository.js
```

### 4.4 Recipe

Отвечает за связь цифрового заказа с физическим приготовлением в автомате.

```text
domain/recipe/
├── recipeData.js
├── RecipeService.js
└── RecipeRepository.js
```

### 4.5 Order

Будущая область для корзины, заказов, статусов и истории покупок.

### 4.6 Loyalty

Будущая область для Клуба Тимоши, бонусов, рефералов и клубного счёта.

### 4.7 Customer

Будущая область для профиля клиента, контактов, согласий и предпочтений.

## 5. Архитектурные правила

1. UI вызывает только публичные методы доменных сервисов.
2. Domain не импортирует React-компоненты.
3. Domain не зависит от CSS и UI-состояний.
4. Pricing отвечает за цену.
5. Media отвечает за изображения.
6. Recipe отвечает за приготовление.
7. Catalog отвечает за продуктовую модель.
8. Order отвечает за заказ и его жизненный цикл.
9. Данные MVP могут храниться в JS/JSON, но доступ к ним идёт через Repository.
10. В будущем Repository может быть заменён API без изменения UI.

## 6. Почему не src/services

Папка `services` быстро становится общей свалкой логики. Для Soft ICE Platform лучше сразу использовать предметные области:

```text
catalog
pricing
media
recipe
order
loyalty
customer
```

Это упростит развитие Mini App, CRM, Telegram Bot, Web App и Vending UI.

## 7. Связанные документы

- `AGENTS.md`
- `PROJECT_MEMORY.md`
- `docs/architecture/ARCHITECTURE_PRINCIPLES.md`
- `docs/architecture/PROJECT_DECISIONS.md`
- `docs/domain/RECIPE_MODEL.md`
- `docs/domain/PRODUCT_CATALOG.md`
- `docs/domain/PRODUCT_IMAGE_MODEL.md`
