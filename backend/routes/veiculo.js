const { Router } = require('express');
const VeiculoController = require('../controllers/veiculoController');
const autenticacao = require('../middleware/autenticacao')
const routes = Router();

routes.get('/listar',  VeiculoController.getAll
/*  
    #swagger.tags = ['Veículo'] 
    #swagger.summary = 'Lista os veículos'
    #swagger.description = 'Responsavel por listar todos os veículo cadastrados'

    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Veiculo'},
        description: 'Retorna uma lista com todos os veículos'
    }
    #swagger.responses[400]={
        schema: {mensagem: "Veículos não foram encontrados"},
        description: 'Retorna uma mensagem de erro'
    }

*/);

routes.get('/listar/:modelo', VeiculoController.getAllModelo
/*  
    #swagger.tags = ['Veículo']
    #swagger.summary = 'Lista os veículos de acodor com o modelo'
    #swagger.description = 'Responsavel por listar todos os veículo cadastrados selecionados pelo modelo'
    #swagger.parameters['modelo'] = {
        type: 'String',
        description: 'Modelo do veículo'
    }

    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Veiculo'},
        description: 'Retorna os veículos de acordo com o modelo'
    }
    #swagger.responses[400]={
        schema: {mensagem: "Veículos não foram encontrados"},
        description: 'Retorna uma mensagem de erro'
    }

*/);

routes.get('/listar/id/:id', autenticacao, VeiculoController.getOne
/*  
    #swagger.tags = ['Veículo']
    #swagger.summary = 'Listar o veículo pelo id'
    #swagger.description = 'Responsavel por retornar um veículo selecionar pelo Id'
    #swagger.security = [{"Bearer":[]}]
    #swagger.parameters['id'] = {
        type: 'Integer',
        description: 'Id do veículo'
    }

    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Veiculo'},
        description: 'Retorna o veículo selecionado'
    }
    #swagger.responses[400]={
        schema: {mensagem: "Veículo não encontrado"},
        description: 'Retorna uma mensagem de erro'
    }

*/);

routes.post('/add',  autenticacao, VeiculoController.create
/*  
    #swagger.tags = ['Veículo']
    #swagger.summary = 'Adiciona um veículo'
    #swagger.description = 'Responsavel por adicionar um novo veículo'
    #swagger.security = [{"Bearer":[]}]

    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Veiculo'},
        description: 'Retorna o veículo atualizado'
    }
    #swagger.responses[400]={
        schema: {mensagem: "falta de dados ou dados informados de forma errada"},
        description: 'Retorna uma mensagem de erro'
    }

*/);

routes.delete('/del/:id', autenticacao, VeiculoController.delete
/*  
    #swagger.tags = ['Veículo']
    #swagger.summary = 'Deleta um veículo'
    #swagger.description = 'Responsavel por deletar um veículo selecionado seu id'
    #swagger.security = [{"Bearer":[]}]
    #swagger.parameters['id'] = {
        type: 'Integer',
        description: 'Id do veículo'
    }

    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Veiculo'},
        description: 'Retorna o veículo excluido'
    }
    #swagger.responses[400]={
        schema: {mensagem: "Veículo não encontrado"},
        description: 'Retorna uma mensagem de erro'
    }

*/);

routes.put('/upd/:id', autenticacao, VeiculoController.update
/*  
    #swagger.tags = ['Veículo']
    #swagger.summary = 'Atualizar o veículo'
    #swagger.description = 'Responsavel por atualizar um veículo selecionado pelo Id'
    #swagger.security = [{"Bearer":[]}]
    #swagger.parameters['id'] = {
        type: 'Integer',
        description: 'Id do veículo'
    }

    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Veiculo'},
        description: 'Retorna o veículo atualizado'
    }
    #swagger.responses[400]={
        schema: {mensagem: "Veículo não encontrado"},
        description: 'Retorna uma mensagem de erro'
    }

*/);

module.exports = routes;