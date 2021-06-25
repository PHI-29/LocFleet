const { Router } = require('express');
const VeiculoController = require('../controllers/veiculoController');
const routes = Router();

routes.get('/listar', VeiculoController.getAll);

routes.get('/listar/:modelo', VeiculoController.getAllModelo);

routes.get('/listar/id/:id', VeiculoController.getOne);

routes.post('/add', VeiculoController.create);

routes.delete('/del/:id', VeiculoController.delete);

module.exports = routes;