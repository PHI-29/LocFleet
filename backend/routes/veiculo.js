const { Router } = require('express');
const VeiculoController = require('../controllers/veiculoController');
const autenticacao = require('../middleware/autenticacao')
const routes = Router();

routes.get('/listar',  VeiculoController.getAll);

routes.get('/listar/:modelo', VeiculoController.getAllModelo);

routes.get('/listar/id/:id', autenticacao, VeiculoController.getOne);

routes.post('/add',  autenticacao, VeiculoController.create);

routes.delete('/del/:id', autenticacao, VeiculoController.delete);

routes.put('/upd/:id', autenticacao, VeiculoController.update);

module.exports = routes;