const { Router } = require('express');
const { Usuario } = require('../models/');
const usuarioRouter = require('./usuario');
const veiculoRouter = require('./veiculo');
const motoristaRouter = require('./motorista');
const autenticacao = require('../middleware/autenticacao')
const jwt = require('jsonwebtoken');
const routes = Router();

routes.get('/', (req, res) => {
/*  
    #swagger.tags = ['ROTA PRINCIPAL']
    #swagger.summary = 'Rota principal'
    #swagger.description = 'Uma rota básica de teste do servidor'
    
    #swagger.responses[200]={
        schema: {mensagem: 'Teste'},
        description: 'Retorna uma mensagem'
    }
    
*/
    res.status(200).json({ mensagem: "Teste"});
})

routes.use('/usuario', usuarioRouter);

routes.use('/veiculo', veiculoRouter);

routes.use('/motorista', motoristaRouter);

routes.post('/login', async (req, res) => {
/* 
    #swagger.tags = ['Usuario login/logout']
    #swagger.summary = 'Login do usuário'
    #swagger.description = 'Responsavel por fazer o login do usuario'
    
    #swagger.responses[200]={
        schema: {mensagem: 'Usuário autorizado'},
        description: 'Retorna uma mensagem'
    }
    #swagger.responses[401]={
        schema: {mensagem: "Usuário não autorizado"},
        description: 'Retorna uma mensagem de error'
    }
*/
    const findUser = await Usuario.findOne({
        where: { email: req.body.email }
    })

    if (findUser) {

        if (req.body.email === findUser.email && req.body.senha === findUser.senha) {

            let id = findUser.id
            const  token = jwt.sign({ id }, process.env.JWT_KEY, {
                expiresIn: "1h"
            })
            return res.status(200).json({
                mensagem: "Usuário autorizado",
                auth: true,
                id,
                token
            })
            
        } else { return res.status(401).json({ mensagem: "Usuário não autorizado" }) }

    } else { return res.status(401).json({ mensagem: "Usuário não autorizado" }) }
});


routes.get('/logout', autenticacao, async (req, res) => {
/* 
    #swagger.tags = ['Usuario login/logout']
    #swagger.summary = 'Logout do usuário'
    #swagger.description = 'Responsavel por fazer o logout do usuario'
    #swagger.security = [{"Bearer":[]}]

    #swagger.responses[200]={
        description: 'Retorna authorization false e anula o token'
    }
*/
    return res.status(200).json({
        auth: false,
        token: null
    })
});

module.exports = routes; 