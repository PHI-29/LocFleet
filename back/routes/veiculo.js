const { Router } = require('express');
const VeiculoController = require('../controllers/veiculoController');
const routes = Router();

routes.get('/listar', VeiculoController.getAll);

routes.post('/add', VeiculoController.create);

module.exports = routes;