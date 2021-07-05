const { Router } = require('express');
const MotorController = require('../controllers/motorController');
const autenticacao = require('../middleware/autenticacao')
const routes = Router();

routes.get('/listar', MotorController.getAll
/*  
    #swagger.tags = ['Motorista']
    #swagger.summary = 'Lista os motoristas'
    #swagger.description = 'Responsavel por listar todos os motoristas cadastrados'

    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Motorista'},
        description: 'Retorna uma lista com todos os motoristas'
    }
    #swagger.responses[400]={
        schema: {mensagem: "Motoristas não foram encontrados"},
        description: 'Retorna uma mensagem de erro'
    }

*/);

routes.get('/listar/:nome', MotorController.getAllName
/*  
    #swagger.tags = ['Motorista']
    #swagger.summary = 'Lista os motoristas de acodor com o nome'
    #swagger.description = 'Responsavel por listar todos os motoristas cadastrados selecionados pelo nome'
    #swagger.parameters['nome'] = {
        type: 'String',
        description: 'Nome do motorista'
    }

    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Motorista'},
        description: 'Retorna os motoristas de acordo com o nome'
    }
    #swagger.responses[400]={
        schema: {mensagem: "Motoristas não foram encontrados"},
        description: 'Retorna uma mensagem de erro'
    }

*/);

routes.get('/listar/id/:id', autenticacao, MotorController.getOne
/*  
    #swagger.tags = ['Motorista']
    #swagger.summary = 'Listar o motorista pelo id'
    #swagger.description = 'Responsavel por retornar um motorista selecionar pelo Id'
    #swagger.security = [{"Bearer":[]}]
    #swagger.parameters['id'] = {
        type: 'Integer',
        description: 'Id do motorista'
    }

    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Motorista'},
        description: 'Retorna um motorista'
    }
    #swagger.responses[400]={
        schema: {mensagem: "Motorista não encontrado"},
        description: 'Retorna uma mensagem de erro'
    }

*/);

routes.post('/add', autenticacao, MotorController.create
/*  
    #swagger.tags = ['Motorista']
    #swagger.summary = 'Adiciona um motorista'
    #swagger.description = 'Responsavel por adicionar um novo motorista'
    #swagger.security = [{"Bearer":[]}]

    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Motorista'},
        description: 'Retorna o motorista cadastrado'
    }
    #swagger.responses[400]={
        schema: {mensagem: "falta de dados ou dados informados de forma errada"},
        description: 'Retorna uma mensagem de erro'
    }

*/);

routes.delete('/del/:id', autenticacao, MotorController.delete
/*  
    #swagger.tags = ['Motorista']
    #swagger.summary = 'Deleta um motorista'
    #swagger.description = 'Responsavel por deletar um motorista selecionado seu id'
    #swagger.security = [{"Bearer":[]}]
    #swagger.parameters['id'] = {
        type: 'Integer',
        description: 'Id do motorista'
    }

    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Motorista'},
        description: 'Retorna o motorista excluido'
    }
    #swagger.responses[400]={
        schema: {mensagem: "Motorista não encontrado"},
        description: 'Retorna uma mensagem de erro'
    }

*/);

routes.put('/upd/:id', autenticacao, MotorController.update
/*  
    #swagger.tags = ['Motorista']
    #swagger.summary = 'Atualizar o motorista'
    #swagger.description = 'Responsavel por atualizar um motorista selecionado pelo Id'
    #swagger.security = [{"Bearer":[]}]
    #swagger.parameters['id'] = {
        type: 'Integer',
        description: 'Id do motorista'
    }

    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Motorista'},
        description: 'Retorna o motorista atualizado'
    }
    #swagger.responses[400]={
        schema: {mensagem: "Motorista não encontrado"},
        description: 'Retorna uma mensagem de erro'
    }

*/);

module.exports = routes;