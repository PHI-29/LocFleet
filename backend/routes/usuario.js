const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');
const routes = Router();

routes.get('/listar', UsuarioController.getAll);

routes.get('/listar/id/:id', UsuarioController.getOne);

routes.post('/add', UsuarioController.create);

routes.delete('/del/:id', UsuarioController.delete);

routes.put('/upd/:id', UsuarioController.update);

module.exports = routes;