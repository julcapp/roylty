# PRODUCT-003 — Domain Entity Normalization

Статус: Ready for Codex
Sprint: 1.1 — Product Engine Core
Epic: Product Engine
Priority: High
Complexity: Medium

## Goal

Normalize the Product Engine domain model by introducing explicit entity modules for products, flavors, syrups, toppings and references to recipe/media.

The task must prepare the catalog for future expansion beyond soft ice cream without changing the current UI.

## Context

Before implementation, read:

- `AGENTS.md`
- `PROJECT_MEMORY.md`
- `.codex/TASK_TEMPLATE.md`
- `.codex/CODEX_PLAYBOOK.md`
- `docs/architecture/DDD_LITE_ARCHITECTURE.md`
- `docs/architecture/ARCHITECTURE_PRINCIPLES.md`
- `docs/domain/PRODUCT_CATALOG.md`
- `docs/domain/PRODUCT_IMAGE_MODEL.md`
- `docs/domain/RECIPE_MODEL.md`
- `docs/tasks/TASK_INDEX.md`
- `docs/engineering/ENGINEERING_JOURNAL.md`
- `CHANGELOG.md`

## Architecture intent

The current catalog contains the first MVP catalog data.

PRODUCT-003 must introduce domain entity factories/validators without moving catalog data into UI and without creating dependencies on React.

Target relationship:

```text
CatalogService
  -> CatalogRepository
    -> catalogData.js
      -> ProductEntity / FlavorEntity / SyrupEntity / ToppingEntity
      -> RecipeReference / MediaReference
```

## Files to create or modify

Work inside:

```text
frontend/miniapp/src/domain/
```

Create:

```text
product/ProductEntity.js
product/index.js
flavor/FlavorEntity.js
flavor/index.js
syrup/SyrupEntity.js
syrup/index.js
topping/ToppingEntity.js
topping/index.js
recipe/RecipeReference.js
media/MediaReference.js
```

Modify only if needed:

```text
frontend/miniapp/src/domain/catalog/catalogData.js
frontend/miniapp/src/domain/catalog/CatalogRepository.js
frontend/miniapp/src/domain/catalog/CatalogService.js
frontend/miniapp/src/domain/catalog/index.js
CHANGELOG.md
docs/architecture/PROJECT_DECISIONS.md
docs/engineering/ENGINEERING_JOURNAL.md
docs/tasks/TASK_INDEX.md
```

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

## Entity requirements

Each entity module should provide a small factory function and simple validation helpers.

Examples:

```js
createProductEntity(rawProduct)
isActiveProduct(product)
```

```js
createFlavorEntity(rawFlavor)
```

```js
createSyrupEntity(rawSyrup)
```

```js
createToppingEntity(rawTopping)
```

```js
createRecipeReference(recipeId)
```

```js
createMediaReference(mediaId)
```

## Rules

- No React imports.
- No UI state.
- No pricing logic.
- No media selection logic.
- No recipe preparation logic.
- No API calls.
- No async behavior.
- No dependency on browser globals.
- Keep functions pure.

## Catalog integration

Repository may map raw catalog records through entity factories before returning them.

Service methods should continue to work after normalization.

Existing PRODUCT-002 methods must not break:

```text
getProducts()
getProductById()
getFlavors()
getFlavorById()
getSyrups()
getSyrupById()
getToppings()
getToppingById()
isFlavorAvailable()
isSyrupAllowed()
isToppingAllowed()
```

## Build command

```bash
cd frontend/miniapp
npm run build
```

If npm is not visible in PATH, follow `.codex/CODEX_PLAYBOOK.md`.

## Acceptance criteria

- Entity modules created.
- Catalog repository/service still work.
- Build passes.
- UI unchanged.
- No CSS changes.
- No navigation changes.
- No asset changes.
- PRODUCT-002 public methods remain available.
- Engineering journal and task index updated if appropriate.

## Deliverables

Codex must report:

1. Changed files.
2. Created entity modules.
3. Repository/service changes.
4. Build result.
5. Confirmation that UI was not modified.
6. Architecture summary.
