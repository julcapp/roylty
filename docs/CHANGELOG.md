
# CHANGELOG

## 2026-06-24

### Добавлена модель Payment

Создана таблица Payment.

Назначение:

* учет платежей клиентов;
* интеграция ЮKassa;
* учет статусов оплаты;
* хранение идентификаторов платежной системы;
* контроль пополнения клубного счета.

Статусы:

* pending
* waiting_for_capture
* succeeded
* canceled
* failed

Миграция:

add_payment_model

Результат:

Таблица Payment успешно создана в PostgreSQL.
