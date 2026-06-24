const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Главная страница
app.get('/', (req, res) => {
    res.json({
        project: 'У Тимоши CRM',
        status: 'online',
        version: '0.1.0',
        serverTime: new Date().toISOString()
    });
});

// Проверка сервиса
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        database: 'connected',
        timestamp: new Date().toISOString()
    });
});

// Информация о программе лояльности
app.get('/api/info', (req, res) => {
    res.json({
        project: 'У Тимоши',
        cashback: '7%',
        clubDeposit: 300,
        minimumBalance: 150,
        birthdayGift: true
    });
});

// Тест платежного модуля
app.get('/api/payment/test', (req, res) => {
    res.json({
        module: 'payment',
        status: 'ready',
        provider: 'yookassa'
    });
});

// Создание платежа (заглушка)
app.post('/api/payment/create', (req, res) => {

    const { amount, customerId } = req.body;

    res.json({
        success: true,
        paymentId: 'TEST-' + Date.now(),
        customerId,
        amount,
        status: 'pending',
        createdAt: new Date().toISOString()
    });
});

// Проверка статуса платежа
app.get('/api/payment/status/:id', (req, res) => {

    res.json({
        paymentId: req.params.id,
        status: 'pending',
        provider: 'yookassa'
    });
});

// Успешная оплата
app.get('/payment/success', (req, res) => {

    res.send(`
        <h1>Спасибо!</h1>
        <p>Платеж успешно принят.</p>
        <a href="/">На главную</a>
    `);
});

// Ошибка оплаты
app.get('/payment/fail', (req, res) => {

    res.send(`
        <h1>Что-то пошло не так</h1>
        <p>Платеж не был завершен.</p>
        <a href="/payment/retry">Повторить оплату</a>
    `);
});

// Ожидание подтверждения
app.get('/payment/pending', (req, res) => {

    res.send(`
        <h1>Проверяем платеж</h1>
        <p>Пожалуйста, не закрывайте страницу.</p>
    `);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Roylty backend running on port ${PORT}`);
});