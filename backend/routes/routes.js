const { Router } = require('express');
const { Usuario } = require('../models/');
const usuarioRouter = require('./usuario');
const veiculoRouter = require('./veiculo');
const motoristaRouter = require('./motorista');
const jwt = require('jsonwebtoken');
const routes = Router();

routes.get('/', (req, res) => {
    res.status(200).json({ mensagem: "Hello World"});
})

routes.get('/oi', verificarJWT, (req, res) => {
    res.status(200).json({ mensagem: "rota oi"});
})

routes.use('/usuario', usuarioRouter);

routes.use('/veiculo', veiculoRouter);

routes.use('/motorista', motoristaRouter);


routes.post('/login', async (req, res) => {

    const findUser = await Usuario.findOne({
        where: { email: req.body.email }
    })

    if (findUser) {

        if (req.body.email === findUser.email && req.body.senha === findUser.senha) {

            let id = findUser.id // Id do banco
            const  token = jwt.sign({ id }, process.env.ACCESS_SECRET, {
                expiresIn: "1h"
            })
            return res.status(200).json({
                mensagem: "Usuário autorizado",
                auth: true,
                id,
                token
            })
            
        } else {
            return res.status(401).json({ mensagem: "Usuário não autorizado" })
        }
    } else {
        return res.status(401).json({ mensagem: "Usuário não autorizado" })
    }
});


routes.post('/logout', async (req, res) => {
    return res.status(200).json({
        auth: false,
        token: null
    })
});


function verificarJWT(req, res, next){
    const token = req.headers['x-access-token'];
    if(!token) return res.status(401).json({ mensagem: "Não autorizado" });

    jwt.verify(token, process.env.ACCESS_SECRET, function(erro, decoded){
        if(erro) return res.status(401).json({ mensagem: "Não autorizado" });
        req.usuarioId = decoded
        next()
    })
}

module.exports = routes; 