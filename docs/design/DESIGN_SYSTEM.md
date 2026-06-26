# Soft ICE Design System

Статус: Draft  
Версия: 0.1  
Проект: Soft ICE Platform / бренд «У Тимоши»

## 1. Назначение

Soft ICE Design System — единый стандарт проектирования интерфейсов платформы Soft ICE.

Документ определяет общий визуальный язык для:

- Telegram Mini App;
- MAX Mini App;
- VK Mini App;
- Web App;
- терминала вендингового аппарата;
- Seller App;
- CRM;
- Partner / Franchise интерфейсов;
- сайта `utimoshi.ru`.

## 2. Главный принцип

> Один компонент проектируется один раз и используется во всех интерфейсах экосистемы.

Компонент должен иметь:

1. UX-назначение.
2. Визуальное описание.
3. Состояния.
4. React-реализацию.
5. XML-аналог для терминала.
6. Правила адаптации для Mini App.
7. Правила адаптации для CRM / Seller App.

## 3. Философия дизайна

Интерфейс «У Тимоши» должен быть:

- дружелюбным;
- простым;
- визуально чистым;
- эмоциональным, но не перегруженным;
- понятным без инструкции;
- ориентированным на быстрое действие.

Главное UX-правило:

> Каждый экран помогает человеку сделать следующий естественный шаг.

## 4. Запрещённые UX-паттерны

Не использовать:

- перегруженные экраны;
- мелкие кнопки;
- технические ошибки без объяснения;
- обязательную регистрацию перед покупкой;
- длинные формы там, где достаточно одного действия;
- разные стили карточек в разных каналах;
- случайные изображения без единого фотостандарта.

## 5. Язык интерфейса

Не использовать слово «регистрация» в пользовательских сценариях.

Вместо этого использовать формулировки:

- Получить скидку;
- Вступить в Клуб Тимоши;
- Получить бонусы;
- Получить подарок;
- Открыть Mini App;
- Продолжить;
- Собрать мороженое.

## 6. Методология Atomic Design

Интерфейсы Soft ICE проектируются по методологии Atomic Design.

### 6.1 Atoms

Минимальные элементы:

- Button;
- Icon;
- Text;
- Price;
- Badge;
- Avatar;
- Input;
- Timer;
- Divider;
- Spinner.

### 6.2 Molecules

Комбинации атомов:

- ProductCard;
- ActionCard;
- PhoneInput;
- PriceBlock;
- QRBlock;
- BonusBadge;
- NavigationItem.

### 6.3 Organisms

Крупные функциональные блоки:

- AppHeader;
- ProductList;
- BottomNavigation;
- OrderSummary;
- LoyaltyBanner;
- PaymentMethodList.

### 6.4 Templates

Шаблоны экранов:

- ProductSelectionTemplate;
- CheckoutTemplate;
- ReceiptTemplate;
- ClubOfferTemplate;
- MiniAppHomeTemplate.

### 6.5 Pages

Готовые экраны:

- MiniAppHomePage;
- TerminalWelcomePage;
- TerminalSyrupSelectionPage;
- TerminalToppingSelectionPage;
- TerminalPaymentPage;
- SellerShiftOpenPage.

## 7. Кроссплатформенность

Каждый компонент должен быть спроектирован так, чтобы его можно было использовать в:

| Канал | Требование |
|---|---|
| Telegram Mini App | React / responsive mobile |
| MAX Mini App | React / responsive mobile |
| Web App | Responsive web |
| Terminal UI | XML mapping / large touch screen |
| CRM | Desktop layout |
| Seller App | Mobile-first |

## 8. Медиастандарт

Все изображения продуктов, сиропов, топпингов, стаканчиков и промоматериалов должны использовать единый фотостандарт.

Запрещено использовать случайные изображения из разных источников без согласования стиля.

## 9. Первый целевой экран

Первым экраном, который собирается на основе Design System, является:

```text
MiniAppHomePage
```

Состав:

- AppHeader;
- WelcomeBlock;
- ProductActionCard;
- ClubActionCard;
- BonusCard;
- LocationActionCard;
- BottomNavigation.

## 10. Связанные документы

- `docs/design/DESIGN_TOKENS.md`
- `docs/design/COMPONENT_LIBRARY.md`
- `docs/telegram_bot.md`
- `docs/integrations/YOOKASSA.md`
- `docs/WORKING_DECISIONS_CURRENT.md`
