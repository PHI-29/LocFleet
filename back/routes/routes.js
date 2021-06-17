const { Router } = require('express');
const VeiculoController = require('../controllers/veiculoController');
const UsuarioController = require('../controllers/usuarioController');
const MotorController = require('../controllers/motorController');
const routes = Router();

routes.get('/', (req, res) => {
    res.status(200).send({ mensagem: "Hello World" });
})

routes.get('/usuarios', UsuarioController.getAllV)
routes.post('/usuario', UsuarioController.create)

routes.get('/veiculos', VeiculoController.getAll)
routes.post('/veiculo', VeiculoController.create)

routes.get('/motoristas', MotorController.getAll)
routes.post('/motorista', MotorController.create)

module.exports = routes;
