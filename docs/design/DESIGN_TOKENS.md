# Soft ICE Design Tokens

Статус: Draft  
Версия: 0.1  
Проект: Soft ICE Platform / «У Тимоши»

## 1. Назначение

Design Tokens — единые значения интерфейса, которые используются в React, XML терминала, Mini App, CRM и Seller App.

Цель: исключить ситуацию, когда каждый интерфейс использует свои цвета, отступы, радиусы, тени и размеры.

## 2. Цвета

### 2.1 Базовая палитра

| Token | Значение | Назначение |
|---|---:|---|
| `color.brand.primary` | `#16A39A` | основной бирюзовый цвет бренда |
| `color.brand.primaryDark` | `#0F766E` | активное / нажатое состояние |
| `color.brand.accent` | `#FF4F79` | акцент, CTA, важные действия |
| `color.brand.warm` | `#FFB84D` | подарки, акции, тёплые акценты |
| `color.background.base` | `#F8F4EE` | основной кремовый фон |
| `color.background.card` | `#FFFFFF` | фон карточек |
| `color.text.primary` | `#3A2418` | основной шоколадный текст |
| `color.text.secondary` | `#7A6A5F` | вторичный текст |
| `color.border.soft` | `#E9DED2` | мягкая граница |
| `color.success` | `#20B26B` | успех |
| `color.warning` | `#FFB020` | предупреждение |
| `color.error` | `#E5484D` | ошибка |
| `color.disabled` | `#D8D2CA` | недоступные элементы |

### 2.2 Правила использования цвета

- Красный используется только для ошибок, критичных предупреждений и опасных действий.
- Основные действия должны использовать `color.brand.primary` или `color.brand.accent`.
- Фон интерфейса должен оставаться светлым и не конкурировать с продуктовой фотографией.
- Текст должен быть тёмным и хорошо читаемым.

## 3. Типографика

### 3.1 Семейство шрифтов

Основной стек:

```css
font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Для терминала допускается системный шрифт устройства, если подключение Inter невозможно.

### 3.2 Размеры

| Token | Значение | Использование |
|---|---:|---|
| `font.size.xs` | `12px` | подписи |
| `font.size.sm` | `14px` | вторичный текст |
| `font.size.md` | `16px` | основной текст |
| `font.size.lg` | `20px` | подзаголовки |
| `font.size.xl` | `28px` | заголовки Mini App |
| `font.size.2xl` | `40px` | крупные заголовки терминала |
| `font.size.3xl` | `56px` | hero-заголовки терминала |

### 3.3 Насыщенность

| Token | Значение |
|---|---:|
| `font.weight.regular` | `400` |
| `font.weight.medium` | `500` |
| `font.weight.semibold` | `600` |
| `font.weight.bold` | `700` |

## 4. Пространственная сетка

Базовая сетка: `4px`.

| Token | Значение |
|---|---:|
| `space.1` | `4px` |
| `space.2` | `8px` |
| `space.3` | `12px` |
| `space.4` | `16px` |
| `space.5` | `20px` |
| `space.6` | `24px` |
| `space.8` | `32px` |
| `space.10` | `40px` |
| `space.12` | `48px` |
| `space.16` | `64px` |

## 5. Радиусы

| Token | Значение | Использование |
|---|---:|---|
| `radius.sm` | `8px` | маленькие элементы |
| `radius.md` | `16px` | кнопки, поля |
| `radius.lg` | `24px` | карточки |
| `radius.xl` | `32px` | крупные панели |
| `radius.round` | `999px` | круглые кнопки, badges |

## 6. Тени

| Token | Значение | Использование |
|---|---|---|
| `shadow.sm` | `0 2px 8px rgba(58,36,24,0.08)` | лёгкая тень |
| `shadow.md` | `0 8px 24px rgba(58,36,24,0.12)` | карточки |
| `shadow.lg` | `0 16px 48px rgba(58,36,24,0.16)` | модальные окна |

## 7. Размеры компонентов

### 7.1 Кнопки

| Token | Значение |
|---|---:|
| `button.height.mobile` | `56px` |
| `button.height.terminal` | `88px` |
| `button.padding.x` | `24px` |
| `button.radius` | `16px` |

### 7.2 Карточки

| Token | Значение |
|---|---:|
| `card.padding.mobile` | `16px` |
| `card.padding.terminal` | `32px` |
| `card.radius` | `24px` |
| `card.border.width` | `1px` |

## 8. Анимации

| Token | Значение | Использование |
|---|---:|---|
| `motion.fast` | `120ms` | hover / tap |
| `motion.base` | `200ms` | переходы карточек |
| `motion.slow` | `320ms` | модальные окна |
| `motion.easing.default` | `ease-out` | стандартное движение |

## 9. Touch targets

Минимальные размеры интерактивных областей:

| Канал | Минимум |
|---|---:|
| Mobile / Mini App | `44px` |
| Terminal | `72px` |
| CRM Desktop | `36px` |

## 10. Правило масштабирования

Компонент не должен иметь зашитые размеры только под один канал. Размеры должны настраиваться через variant:

- `mobile`;
- `terminal`;
- `desktop`;
- `seller`.
