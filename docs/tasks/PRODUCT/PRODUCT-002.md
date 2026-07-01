# PRODUCT-002 — Catalog Domain Foundation

Статус: Ready for Codex
Sprint: 1.1 — Product Engine Core
Epic: Product Engine

## Goal

Create the first real Catalog Domain implementation for the Mini App using the DDD Lite architecture.

The goal is to introduce product catalog data and public catalog access methods without changing the UI.

## Context

Before implementation, read:

- `AGENTS.md`
- `PROJECT_MEMORY.md`
- `.codex/TASK_TEMPLATE.md`
- `docs/architecture/DDD_LITE_ARCHITECTURE.md`
- `docs/architecture/ARCHITECTURE_PRINCIPLES.md`
- `docs/domain/PRODUCT_CATALOG.md`
- `docs/domain/RECIPE_MODEL.md`
- `CHANGELOG.md`

## Files to create or modify

Work only inside:

```text
frontend/miniapp/src/domain/catalog/
```

Expected files:

```text
catalogData.js
CatalogRepository.js
CatalogService.js
index.js
```

You may update:

```text
CHANGELOG.md
docs/architecture/PROJECT_DECISIONS.md
```

only if needed.

## Do not modify

Do not modify:

```text
frontend/miniapp/src/App.jsx
frontend/miniapp/src/pages/*
frontend/miniapp/src/screens/*
frontend/miniapp/src/components/*
frontend/miniapp/src/styles/*
frontend/miniapp/src/assets/*
frontend/miniapp/src/analytics/*
```

## Catalog data requirements

Create initial catalog data for MVP:

### Product

- id: `product_soft_ice_vanilla_cup`
- category: `soft_ice`
- default flavor: `flavor_vanilla`
- allowed syrups:
  - `syrup_strawberry`
  - `syrup_chocolate`
  - `syrup_caramel`
- allowed toppings:
  - `topping_oreo`
  - `topping_rainbow_sprinkles`
  - `topping_chocolate_chips`
- status: `active`

### Flavor

- `flavor_vanilla`

### Syrups

- `syrup_strawberry`
- `syrup_chocolate`
- `syrup_caramel`

### Toppings

- `topping_oreo`
- `topping_rainbow_sprinkles`
- `topping_chocolate_chips`

## Naming rules

Use stable semantic IDs.

Do not use Russian display names as internal IDs.

User-facing names must support at least `ru` localization structure, for example:

```js
name: {
  ru: 'Ванильное мягкое мороженое'
}
```

## Repository requirements

`CatalogRepository` should expose read methods such as:

```js
getProducts()
getProductById(productId)
getFlavors()
getFlavorById(flavorId)
getSyrups()
getSyrupById(syrupId)
getToppings()
getToppingById(toppingId)
```

Repository reads from local `catalogData.js` only.

No API calls.
No React imports.
No UI logic.

## Service requirements

`CatalogService` wraps `CatalogRepository` and exposes public catalog methods.

It may provide simple validation helpers such as:

```js
isSyrupAllowedForProduct(productId, syrupId)
isToppingAllowedForProduct(productId, toppingId)
```

No pricing logic.
No media logic.
No recipe logic.

## index.js requirements

Export the repository, service and default ready-to-use instance if appropriate.

## Build command

```bash
cd frontend/miniapp
npm run build
```

## Acceptance criteria

- Catalog data exists in `domain/catalog/catalogData.js`.
- Repository exposes catalog read methods.
- Service wraps Repository.
- No UI files changed.
- Build passes.
- No console/runtime behavior changed.
- Ready for PRODUCT-003.

## Deliverables

Codex must report:

1. Changed files.
2. Created catalog entities.
3. Public methods added.
4. Build result.
5. Confirmation that UI was not modified.
