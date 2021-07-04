const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');
const autenticacao = require('../middleware/autenticacao')
const routes = Router();

routes.get('/listar/id/:id', autenticacao, UsuarioController.getOne);

routes.post('/add', autenticacao, UsuarioController.create);

routes.delete('/del/:id', autenticacao, UsuarioController.delete);

routes.put('/upd/:id', UsuarioController.update);

module.exports = routes;