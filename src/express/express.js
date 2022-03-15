'use strict';

const express = require(`express`);
const path = require(`path`);

const PUBLIC_DIR = `public`;

const router = require(`./routes/index`);

// Зафиксируем порт для сервера
const DEFAULT_PORT = 8080;

const app = express();

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

// Подключим созданные маршруты
app.use(router);

// Запуск сервера
app.listen(DEFAULT_PORT);
