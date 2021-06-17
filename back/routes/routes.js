const { Router } = require('express');
const usuarioRouter = require('./usuario');
const veiculoRouter = require('./veiculo');
const motoristaRouter = require('./motorista');
const routes = Router();

routes.get('/', (req, res) => {
    res.status(200).send({ mensagem: "Hello World" });
})

routes.use('/usuario', usuarioRouter);

routes.use('/veiculo', veiculoRouter);

routes.use('/motorista', motoristaRouter);

module.exports = routes;
