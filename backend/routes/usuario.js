const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');
const routes = Router();

routes.get('/listar', UsuarioController.getAll);

routes.post('/add', UsuarioController.create);

module.exports = routes;