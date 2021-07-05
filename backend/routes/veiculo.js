const { Router } = require('express');
const VeiculoController = require('../controllers/veiculoController');
const autenticacao = require('../middleware/autenticacao')
const routes = Router();

routes.get('/listar',  VeiculoController.getAll
/*  
    #swagger.tags = ['Veículo'] 
    #swagger.description = 'responsavel por selecionar o id usuario do Veículo pelo parametro'

    #swaggwe.response[200]={
        schema: {$ref: #/description/Veiculo}
        description: 'Mensagem enviada com sucesso'
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Veículo não encontrado"}
        description: 'Veículo não encontrado'
    }

*/);

routes.get('/listar/:modelo', VeiculoController.getAllModelo
/*  
    #swagger.tags = ['Veículo'] 
    #swagger.description = 'responsavel por selecionar o id usuario do Veículo pelo parametro'

    #swaggwe.response[200]={
        schema: {$ref: #/description/Veiculo}
        description: 'Mensagem enviada com sucesso'
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Veículo não encontrado"}
        description: 'Veículo não encontrado'
    }

*/);

routes.get('/listar/id/:id', autenticacao, VeiculoController.getOne
/*  
    #swagger.tags = ['Veículo'] 
    #swagger.description = 'responsavel por selecionar o id usuario do Veículo pelo parametro'

    #swaggwe.response[200]={
        schema: {$ref: #/description/Veiculo}
        description: 'Mensagem enviada com sucesso'
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Veículo não encontrado"}
        description: 'Veículo não encontrado'
    }

*/);

routes.post('/add',  autenticacao, VeiculoController.create
/*  
    #swagger.tags = ['Veículo'] 
    #swagger.description = 'responsavel por selecionar o id usuario do Veículo pelo parametro'

    #swaggwe.response[200]={
        schema: {$ref: #/description/Veiculo}
        description: 'Mensagem enviada com sucesso'
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Veículo não encontrado"}
        description: 'Veículo não encontrado'
    }

*/);

routes.delete('/del/:id', autenticacao, VeiculoController.delete
/*  
    #swagger.tags = ['Veículo'] 
    #swagger.description = 'responsavel por selecionar o id usuario do Veículo pelo parametro'

    #swaggwe.response[200]={
        schema: {$ref: #/description/Veiculo}
        description: 'Mensagem enviada com sucesso'
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Veículo não encontrado"}
        description: 'Veículo não encontrado'
    }

*/);

routes.put('/upd/:id', autenticacao, VeiculoController.update
/*  
    #swagger.tags = ['Veículo'] 
    #swagger.description = 'responsavel por selecionar o id usuario do Veículo pelo parametro'

    #swaggwe.response[200]={
        schema: {$ref: #/description/Veiculo}
        description: 'Mensagem enviada com sucesso'
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Veículo não encontrado"}
        description: 'Veículo não encontrado'
    }

*/);

module.exports = routes;