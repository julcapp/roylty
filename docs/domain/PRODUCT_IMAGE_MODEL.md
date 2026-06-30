# Product Image Model

Статус: Draft
Версия: 0.1
Проект: Soft ICE Platform / «У Тимоши»

## 1. Назначение

Документ описывает, как изображения продукта связываются с базовым мороженым, сиропом, топпингом и экраном предпросмотра заказа.

## 2. Главный принцип

Интерфейс не должен хранить пути к картинкам внутри компонентов. Путь к изображению должен приходить из каталога.

## 3. Типы изображений

| Type | Описание |
|---|---|
| `base` | базовое мороженое без добавок |
| `syrup` | мороженое с одним сиропом |
| `topping` | мороженое с одним топпингом |
| `composed` | итоговая комбинация: база + сироп + топпинг |
| `ingredient` | отдельный ингредиент |
| `club` | изображения Клуба Тимоши |
| `brand` | бренд-персонаж / Тимофей |

## 4. Модель записи

```json
{
  "id": "vanilla_chocolate_sprinkles",
  "type": "composed",
  "base": "vanilla",
  "syrup": "chocolate",
  "topping": "sprinkles",
  "image": "/images/icecream/composed/vanilla_chocolate_sprinkles.webp",
  "alt": "Ванильное мягкое мороженое с шоколадным сиропом и цветной посыпкой",
  "version": 1,
  "status": "approved"
}
```

## 5. Размеры

Каждое ключевое изображение может иметь варианты:

```text
sm
md
lg
xl
```

## 6. Статусы

| Status | Описание |
|---|---|
| `draft` | черновик |
| `review` | на проверке |
| `approved` | можно использовать в интерфейсе |
| `deprecated` | устарело |
| `archived` | архив |

## 7. Логика выбора изображения

```text
getProductImage(base, syrup, topping)
```

Приоритет:

1. итоговое изображение комбинации;
2. изображение с сиропом;
3. изображение с топпингом;
4. базовое изображение.

## 8. События аналитики

```text
ProductImageShown
ProductImageFallbackShown
ProductImageMissing
```

## 9. Связанные документы

- `docs/domain/PRODUCT_CATALOG.md`
- `docs/domain/SYRUP_CATALOG.md`
- `docs/domain/TOPPING_CATALOG.md`
- `docs/design/PHOTO_STANDARD.md`
- `docs/design/RESPONSIVE_UI_STANDARD.md`
