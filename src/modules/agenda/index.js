'use strict'

const AgendaController = require('./controllers/agenda.controller')

const { Router } = require('express');

const routes = Router();

routes.get('/', async (req, res, next) => {
    res.send(await AgendaController.getAll())
});

routes.get('/:id', async (req, res, next) => {
    res.send(await AgendaController.getOneById(req));
});

routes.post('/', async (req, res, next) => {
    res.send(await AgendaController.save(req))
});

routes.put('/', async (req, res, next) => {
    res.send(await AgendaController.updateOneById(req));
});

routes.delete('/', async(req, res, next) => {
    res.send(await AgendaController.deleteOneById(req));
});

module.exports = routes;