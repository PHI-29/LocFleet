const { Router } = require('express');
const MotorController = require('../controllers/motorController');
const routes = Router();

routes.get('/listar', MotorController.getAll);

routes.post('/add', MotorController.create);

module.exports = routes;