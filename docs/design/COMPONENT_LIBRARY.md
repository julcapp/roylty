# Soft ICE Component Library

Статус: Draft  
Версия: 0.1  
Проект: Soft ICE Platform / «У Тимоши»

## 1. Назначение

Component Library — каталог компонентов интерфейса Soft ICE.

Компоненты используются в:

- Mini App;
- терминале;
- сайте;
- CRM;
- Seller App;
- Partner / Franchise интерфейсах.

## 2. Правило проектирования

> Компонент создаётся один раз, документируется один раз и затем адаптируется под разные каналы.

Для каждого компонента должны быть описаны:

- назначение;
- состав;
- состояния;
- варианты;
- React mapping;
- XML mapping;
- правила использования.

## 3. Первые 10 атомарных компонентов

## Atom 001 — Button

Назначение: основное интерактивное действие.

Варианты:

- `primary`;
- `secondary`;
- `ghost`;
- `danger`;
- `disabled`.

Состояния:

- default;
- pressed;
- loading;
- disabled.

React mapping:

```text
<Button variant="primary" size="mobile">Купить</Button>
```

XML mapping:

```text
<Button id="buy_button" variant="primary" text="Купить" />
```

## Atom 002 — Icon

Назначение: визуальное обозначение действия, статуса или категории.

Примеры:

- мороженое;
- подарок;
- звезда;
- карта;
- профиль;
- чек;
- QR;
- телефон.

Правило: иконка не должна заменять текст в критичных сценариях.

## Atom 003 — Text

Назначение: унифицированное отображение текста.

Варианты:

- heading;
- subheading;
- body;
- caption;
- label;
- price.

React mapping:

```text
<Text variant="heading">Собери своё мороженое</Text>
```

## Atom 004 — Price

Назначение: единое отображение цены.

Формат:

```text
130 ₽
```

Правила:

- валюта всегда указывается;
- копейки не показываются, если сумма целая;
- цена должна быть крупнее описания;
- в карточках цена должна быть видна без прокрутки.

## Atom 005 — Badge

Назначение: компактная отметка статуса или преимущества.

Примеры:

- Вкус дня;
- Новинка;
- Акция;
- Недоступно;
- Готово;
- 20% скидка.

Состояния:

- info;
- success;
- warning;
- error;
- disabled.

## Atom 006 — Avatar

Назначение: отображение персонажа, пользователя, продавца или партнёра.

Варианты:

- mascot;
- user;
- seller;
- partner;
- machine.

Правило: для бренда «У Тимоши» основным mascot-avatar является персонаж Тимоша.

## Atom 007 — Input

Назначение: ввод данных.

Варианты:

- phone;
- text;
- code;
- search;
- number.

Для телефона используется маска:

```text
+7 (___) ___-__-__
```

## Atom 008 — Timer

Назначение: отображение обратного отсчёта.

Используется:

- экран фискального чека;
- экран постпокупочного предложения;
- экран ожидания;
- временные QR-коды.

Правило: таймер не должен использоваться вместо реального состояния оборудования.

## Atom 009 — Divider

Назначение: визуальное разделение блоков.

Варианты:

- horizontal;
- vertical;
- soft;
- strong.

## Atom 010 — Spinner / Loader

Назначение: отображение загрузки.

Используется:

- загрузка Mini App;
- ожидание ответа API;
- открытие карты;
- проверка статуса оплаты.

Правило: если операция длится более 2 секунд, должен быть показан понятный текст состояния.

## 4. Первые Molecules

### Molecule 001 — ProductCard

Состав:

- Image;
- Title;
- Description;
- Price;
- CTA Button;
- Availability Badge.

Используется:

- каталог Mini App;
- карточки Telegram-бота;
- сайт;
- терминал;
- CRM.

### Molecule 002 — ActionCard

Состав:

- Icon;
- Title;
- Description;
- Arrow / CTA.

Используется на главном экране Mini App.

### Molecule 003 — QRBlock

Состав:

- QR Image;
- Title;
- Description;
- Timer;
- Secondary Action.

Используется:

- фискальный чек;
- предоплаченный заказ;
- вход в Mini App;
- клубная карта.

### Molecule 004 — PhoneInput

Состав:

- Input;
- Numeric Keyboard;
- Submit Button;
- Helper Text;
- Privacy Note.

Используется:

- получение чека на телефон;
- вступление в Клуб Тимоши;
- подтверждение телефона через SMSC.RU.

## 5. Первый экран Mini App

MiniAppHomePage собирается из компонентов:

```text
AppHeader
WelcomeBlock
ActionCard: Купить мороженое
ActionCard: Клуб Тимоши
ActionCard: Бонусы
ActionCard: Где купить
BottomNavigation
```

## 6. Статус реализации

| Компонент | Документирован | React | XML |
|---|---:|---:|---:|
| Button | Yes | Todo | Todo |
| Icon | Yes | Todo | Todo |
| Text | Yes | Todo | Todo |
| Price | Yes | Todo | Todo |
| Badge | Yes | Todo | Todo |
| Avatar | Yes | Todo | Todo |
| Input | Yes | Todo | Todo |
| Timer | Yes | Todo | Todo |
| Divider | Yes | Todo | Todo |
| Spinner | Yes | Todo | Todo |
