const { Router } = require('express');
const MotorController = require('../controllers/motorController');
const routes = Router();

routes.get('/listar', MotorController.getAll);

routes.get('/listar/:nome', MotorController.getAllName);

routes.get('/listar/:id', MotorController.getOne);

routes.post('/add', MotorController.create);

module.exports = routes;