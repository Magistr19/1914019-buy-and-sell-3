'use strict';

const {Router} = require(`express`);

// Маршруты приложения мы опишем в отдельных файлах.
// Для определения маршрутов мы воспользуемся Router().
// Примеры маршрутов будут продемонстрированы ниже по тексту.
const offersRoutes = require(`./offers-routes`);
const myRoutes = require(`./my-routes`);
const mainRoutes = require(`./main-routes`);

const router = new Router();

router.use(`/offers`, offersRoutes);
router.use(`/my`, myRoutes);
router.use(`/`, mainRoutes);

module.exports = router;
