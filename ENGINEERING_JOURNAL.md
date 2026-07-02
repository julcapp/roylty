# ENGINEERING_JOURNAL

Status: Active
Project: Soft ICE Platform / Utimoshi

## 2026-07-02 - PRODUCT-006 Pricing Engine Core

- Added an isolated Pricing Engine domain implementation under `frontend/miniapp/src/domain/pricing/`.
- Implemented PricingEntity, concrete PricingRepository MVP rules, PricingService calculation and PricingEngine facade.
- PricingEngine is the only pricing engine class; no duplicate legacy alias is kept.
- MVP pricing returns basePrice 130, finalPrice 130, currency RUB, bonusAllowed true, bonusNominalRate 1 and bonusLimit 104 for the vanilla cup flow.
- Kept pricing independent from React, App.jsx, pages, routes, styles, assets, analytics, Wallet, Payment, Machine and customer balance mutations.
- Verification: Catalog -> Configuration -> Recipe -> Pricing smoke import passed; `npm run build` passed through `C:\Program Files\nodejs\npm.cmd` after adding `C:\Program Files\nodejs` to PATH for the shell session.

## 2026-07-02 - PRODUCT-005 Recipe Engine Core

- Added an isolated Recipe Engine domain implementation under `frontend/miniapp/src/domain/recipe/`.
- Implemented RecipeEntity, concrete RecipeRepository definitions, RecipeService compatibility validation and module exports.
- Kept recipe logic independent from React, App.jsx, pages, routes, styles, pricing, media lookup, analytics, browser APIs and vending machine commands.
- RecipeService receives a valid ConfigurationEntity, validates recipe compatibility and returns a machine-independent RecipeEntity with base, syrup and topping ingredients.
- Verification: recipe service smoke import passed; `npm run build` passed after adding `C:\Program Files\nodejs` to PATH for the shell session.

## 2026-07-01 - PRODUCT-004 Configuration Engine Foundation

- Added an isolated Configuration Engine domain under `frontend/miniapp/src/domain/configuration/`.
- Implemented ConfigurationEntity, ConfigurationRepository, ConfigurationService and module exports.
- Kept configuration building independent from React, App.jsx, pages, routes, styles, pricing, recipe execution, media lookup and machine control.
- Added MVP configuration rules for `product_soft_ice_vanilla_cup` with one default flavor, one default cup size, allowed syrups, allowed toppings, recipe reference and media reference.
- Verification: service smoke import passed; `npm run build` passed after adding `C:\Program Files\nodejs` to PATH for the shell session.
