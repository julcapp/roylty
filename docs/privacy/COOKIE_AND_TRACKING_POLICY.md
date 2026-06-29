# Cookie and Tracking Policy Architecture

Статус: Draft  
Версия: 0.1  
Проект: Soft ICE Platform / бренд «У Тимоши»

## 1. Назначение

Документ описывает архитектуру cookie, client tracking и согласий для сайтов и приложений Soft ICE Platform.

Затрагиваемые каналы:

- `utimoshi.ru` — публичный сайт и лендинги;
- `app.utimoshi.ru` — Mini App / Web App;
- Telegram Mini App;
- MAX Mini App;
- VK Mini App;
- будущие landing pages;
- Partner / Franchise / Seller интерфейсы.

## 2. Главный принцип

> Cookie хранят минимальные идентификаторы, настройки и согласия. История поведения и события хранятся на backend.

Запрещено хранить в cookie:

- паспортные данные;
- полный номер банковской карты;
- платёжные токены;
- пароль;
- медицинские данные;
- чувствительные персональные данные;
- полную историю покупок;
- бонусный баланс как источник истины.

## 3. Категории cookie

## 3.1 Strictly Necessary Cookies

Обязательные cookie, без которых сервис не работает.

Примеры:

| Cookie | Назначение | Срок |
|---|---|---|
| `sid` | идентификатор сессии | session / до 7 дней |
| `csrf_token` | защита от CSRF | session |
| `consent_id` | идентификатор согласия | 12 месяцев |
| `consent_version` | версия принятой политики | 12 месяцев |
| `tg_webapp_session` | сессия Telegram Mini App | session |
| `max_webapp_session` | сессия MAX Mini App | session |

Правило: эти cookie можно использовать для технической работы сервиса, но они должны быть описаны в политике.

## 3.2 Analytics Cookies

Используются для статистики и анализа поведения.

Примеры:

| Cookie | Назначение | Срок |
|---|---|---|
| `analytics_id` | анонимный идентификатор посетителя | 6–12 месяцев |
| `first_visit_at` | дата первого визита | 12 месяцев |
| `last_visit_at` | дата последнего визита | 12 месяцев |
| `landing_page` | первая страница входа | 3 месяца |
| `entry_point` | точка входа | 3 месяца |
| `utm_source` | источник кампании | 3 месяца |
| `utm_medium` | тип канала | 3 месяца |
| `utm_campaign` | кампания | 3 месяца |
| `utm_content` | вариант объявления | 3 месяца |
| `utm_term` | ключевое слово | 3 месяца |
| `referral_code` | реферальный код | 6 месяцев |

Правило: аналитические cookie включаются после согласия, если они не являются строго техническими.

## 3.3 Personalization Cookies

Используются для удобства пользователя.

Примеры:

| Cookie | Назначение | Срок |
|---|---|---|
| `language` | язык интерфейса | 12 месяцев |
| `theme` | тема интерфейса | 12 месяцев |
| `preferred_location` | предпочитаемая точка | 6 месяцев |
| `last_selected_product` | последний выбранный продукт | 3 месяца |
| `last_selected_syrup` | последний выбранный сироп | 3 месяца |
| `last_selected_topping` | последний выбранный топпинг | 3 месяца |

## 3.4 Marketing Cookies

Используются для рекламы, ретаргетинга и рекламной аналитики.

На старте проекта маркетинговые cookie не включаются по умолчанию.

Будущие примеры:

| Cookie | Назначение | Срок |
|---|---|---|
| `marketing_id` | рекламный идентификатор | 6–12 месяцев |
| `vk_pixel_id` | VK ретаргетинг | по правилам провайдера |
| `yandex_metrika_client_id` | Яндекс Метрика | по правилам провайдера |
| `ad_campaign_id` | рекламная кампания | 3 месяца |

Правило: маркетинговые cookie используются только после отдельного согласия.

## 4. Идентификаторы

## 4.1 Anonymous Visitor

До идентификации пользователя создаётся анонимный идентификатор:

```text
anonymous_user_id
```

Он используется для:

- аналитики лендинга;
- определения источника входа;
- связывания сессий;
- анализа воронки до покупки.

## 4.2 Customer

После подтверждения телефона, Telegram ID, MAX ID или другого identity-канала анонимный визит может быть связан с `customer_id`.

Правило:

> Связка anonymous_user_id → customer_id создаётся только после понятного действия пользователя и при наличии соответствующего основания обработки данных.

## 5. Что можно собирать для статистики

Разрешённый стартовый набор:

- `anonymous_user_id`;
- `session_id`;
- источник входа;
- UTM-метки;
- entry point;
- referrer;
- landing page;
- device type;
- browser;
- OS;
- screen size;
- language;
- approximate city by IP;
- first seen at;
- last seen at;
- page views;
- product views;
- CTA clicks;
- Mini App opened;
- order started;
- payment started;
- payment success;
- club offer shown;
- club joined.

## 6. Что не собирать без отдельной необходимости

Не собирать без отдельного сценария и отдельного правового основания:

- точную геолокацию в фоне;
- контакты телефона;
- данные других приложений;
- паспортные данные;
- биометрию;
- чувствительные категории данных;
- содержимое личных сообщений;
- постоянное отслеживание пользователя вне сервисов Soft ICE.

## 7. Consent Banner

На лендингах и сайте должен быть показан cookie banner.

Минимальные действия:

- `Принять необходимые`;
- `Настроить`;
- `Принять все`.

В Mini App допускается compact consent screen, адаптированный под Telegram / MAX.

## 8. Consent Categories

Категории согласий:

- necessary;
- analytics;
- personalization;
- marketing;
- communications;
- photo_processing;
- personal_data_processing.

## 9. Backend storage

На backend должны храниться:

- consent records;
- analytics events;
- identity links;
- session metadata;
- UTM attribution;
- audit log.

Cookie не является источником истины для согласий. Источник истины — backend consent record.

## 10. Связанные документы

- `docs/domain/ANALYTICS_EVENTS.md`
- `docs/domain/CONSENT_MODEL.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/WORKING_DECISIONS_CURRENT.md`
