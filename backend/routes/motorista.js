const { Router } = require('express');
const MotorController = require('../controllers/motorController');
const autenticacao = require('../middleware/autenticacao')
const routes = Router();

routes.get('/listar', MotorController.getAll
/*  
    #swagger.tags = ['Motorista'] 
    #swagger.description = 'responsavel por selecionar o id usuario do Motorista pelo parametro'

    #swaggwe.response[200]={
        schema: {$ref: #/description/Motorista}
        description: 'Mensagem enviada com sucesso'
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Motorista não encontrado"}
        description: 'Motorista não encontrado'
    }

*/);

routes.get('/listar/:nome', autenticacao, MotorController.getAllName
/*  
    #swagger.tags = ['Motorista'] 
    #swagger.description = 'responsavel por selecionar o id usuario do Motorista pelo parametro'

    #swaggwe.response[200]={
        schema: {$ref: #/description/Motorista}
        description: 'Mensagem enviada com sucesso'
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Motorista não encontrado"}
        description: 'Motorista não encontrado'
    }

*/);

routes.get('/listar/id/:id', autenticacao, MotorController.getOne
/*  
    #swagger.tags = ['Motorista'] 
    #swagger.description = 'responsavel por selecionar o id usuario do Motorista pelo parametro'

    #swaggwe.response[200]={
        schema: {$ref: #/description/Motorista}
        description: 'Mensagem enviada com sucesso'
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Motorista não encontrado"}
        description: 'Motorista não encontrado'
    }

*/);

routes.post('/add', autenticacao, MotorController.create
/*  
    #swagger.tags = ['Motorista'] 
    #swagger.description = 'responsavel por selecionar o id usuario do Motorista pelo parametro'

    #swaggwe.response[200]={
        schema: {$ref: #/description/Motorista}
        description: 'Mensagem enviada com sucesso'
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Motorista não encontrado"}
        description: 'Motorista não encontrado'
    }

*/);

routes.delete('/del/:id', autenticacao, MotorController.delete
/*  
    #swagger.tags = ['Motorista'] 
    #swagger.description = 'responsavel por selecionar o id usuario do Motorista pelo parametro'

    #swaggwe.response[200]={
        schema: {$ref: #/description/Motorista}
        description: 'Mensagem enviada com sucesso'
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Motorista não encontrado"}
        description: 'Motorista não encontrado'
    }

*/);

routes.put('/upd/:id', autenticacao, MotorController.update
/*  
    #swagger.tags = ['Motorista'] 
    #swagger.description = 'responsavel por selecionar o id usuario do Motorista pelo parametro'

    #swaggwe.response[200]={
        schema: {$ref: #/description/Motorista}
        description: 'Mensagem enviada com sucesso'
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Motorista não encontrado"}
        description: 'Motorista não encontrado'
    }

*/);

module.exports = routes;