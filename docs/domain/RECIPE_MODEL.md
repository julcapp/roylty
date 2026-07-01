# Recipe Model

Статус: Draft
Версия: 0.1
Проект: Soft ICE Platform / «У Тимоши»

## 1. Назначение

Recipe Model описывает связь между цифровой конфигурацией продукта и физическим приготовлением десерта в вендинговом автомате.

Recipe Engine нужен для того, чтобы одна и та же конфигурация заказа могла использоваться в Mini App, CRM, аналитике и автомате.

## 2. Главный принцип

Пользователь выбирает десерт как продуктовую конфигурацию, а автомат получает рецепт приготовления.

```text
Product Configuration
        ↓
Recipe
        ↓
Machine Command
```

## 3. Базовая сущность Recipe

```json
{
  "id": "recipe_soft_ice_vanilla_strawberry_oreo",
  "product_id": "product_soft_ice_vanilla_cup",
  "flavor_id": "flavor_vanilla",
  "syrup_id": "syrup_strawberry",
  "topping_id": "topping_oreo",
  "machine_profile": {
    "base_mix_id": "mix_vanilla",
    "portion_size_ml": 120,
    "syrup_dose_ml": 15,
    "topping_dose_g": 8
  },
  "status": "draft"
}
```

## 4. Поля Recipe

| Поле | Тип | Описание |
|---|---|---|
| `id` | string | уникальный идентификатор рецепта |
| `product_id` | string | базовый продукт |
| `flavor_id` | string | вкус основы |
| `syrup_id` | string | выбранный сироп |
| `topping_id` | string | выбранный топпинг |
| `machine_profile` | object | параметры приготовления для автомата |
| `status` | string | состояние рецепта |

## 5. Machine profile

`machine_profile` описывает физические параметры выдачи:

| Поле | Тип | Описание |
|---|---|---|
| `base_mix_id` | string | смесь или вкус основы |
| `portion_size_ml` | number | объём порции |
| `syrup_dose_ml` | number | дозировка сиропа |
| `topping_dose_g` | number | дозировка топпинга |

## 6. Статусы рецепта

| Статус | Описание |
|---|---|
| `draft` | черновик |
| `review` | требуется проверка |
| `approved` | можно использовать в продаже |
| `disabled` | временно отключён |
| `archived` | архив |

## 7. Связь с другими модулями

Recipe связан с:

- Product Catalog;
- Syrup Catalog;
- Topping Catalog;
- Product Configurator;
- Price Engine;
- Media Service;
- Order;
- Vending Machine;
- CRM.

## 8. Правило MVP

На этапе MVP Recipe Engine может хранить примерные дозировки и использоваться как подготовительная модель.

Фактическая интеграция с автоматом будет уточняться после получения технической документации производителя.

## 9. Связанные документы

- `docs/domain/PRODUCT_CATALOG.md`
- `docs/domain/SYRUP_CATALOG.md`
- `docs/domain/TOPPING_CATALOG.md`
- `docs/domain/PRODUCT_IMAGE_MODEL.md`
- `docs/domain/MEDIA_LIBRARY_STRUCTURE.md`
- `docs/architecture/ARCHITECTURE_PRINCIPLES.md`
