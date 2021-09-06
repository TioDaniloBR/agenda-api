
const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res, next) => {
    res.send('API Success');
})

module.exports = routes;