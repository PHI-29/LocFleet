const { Router } = require('express');
const MotorController = require('../controllers/motorController');
const routes = Router();

routes.get('/listar', MotorController.getAll);

routes.get('/listar/:nome', MotorController.getAllName);

routes.get('/listar/id/:id', MotorController.getOne);

routes.post('/add', MotorController.create);

routes.delete('/del/:id', MotorController.delete);

routes.put('/upd/:id', VeiculoController.update);

module.exports = routes;