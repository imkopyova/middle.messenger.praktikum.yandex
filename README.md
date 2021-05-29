# [Messenger](https://messenger-imkopyova.netlify.app/)
Messenger – приложение для обмена сообщениями

### Функционал
- авторизация
- изменение данных пользователя
- создание чатов

## Запуск
В режиме разработки:
```bash
npm run dev
```
Тесты:
```bash
npm run test
```
Продакшен-сборка:
```bash
npm run build
```
Сервер:
```bash
node server.js
```

## Документация
- [Макеты Figma](https://www.figma.com/file/q213QsV72crD3wOaWSZQMo/Praktikum-Chat?node-id=0%3A1)
- [Описание API](https://ya-praktikum.tech/api/v2/swagger/#/)


## Использованы инструменты
- Для сборки [Parcel](https://ru.parceljs.org/)
- Для тестов [Mocha](https://mochajs.org/) и [Chai](https://www.chaijs.com/)
- Шаблонизатор [Handlebars](https://handlebarsjs.com/)


## Проблемы
Не полностью тестируется Роутер с History API из-за ошибки
```bash
SecurityError: Could not parse url argument "/login" to pushState against base URL "about:blank"
```
