const { Router } = require('express');
const MotorController = require('../controllers/motorController');
const autenticacao = require('../middleware/autenticacao')
const routes = Router();

routes.get('/listar', MotorController.getAll);

routes.get('/listar/:nome', autenticacao, MotorController.getAllName);

routes.get('/listar/id/:id', autenticacao, MotorController.getOne);

routes.post('/add', autenticacao, MotorController.create);

routes.delete('/del/:id', autenticacao, MotorController.delete);

routes.put('/upd/:id', autenticacao, MotorController.update);

module.exports = routes;