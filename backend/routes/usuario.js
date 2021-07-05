const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');
const autenticacao = require('../middleware/autenticacao')
const routes = Router();

routes.get('/listar/id/:id', autenticacao, UsuarioController.getOne
/*      
    #swagger.tags = ['Usuário']
    #swagger.summary = 'Listar o usuario pelo id'
    #swagger.description = 'Responsavel por retornar um usuário selecionar pelo Id'
    #swagger.security = [{"Bearer":[]}]
    #swagger.parameters['id'] = {
        type: 'Integer',
        description: 'Id do usuário'
    }

    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Usuario'},
        description: 'Retorna o usuário selecionado'
    }
    #swagger.responses[400]={
        schema: {mensagem: "Usuário não encontrado"},
        description: 'Retorna uma mensagem de error'
    }

*/);

routes.post('/add', autenticacao, UsuarioController.create
/*      
    #swagger.tags = ['Usuário']
    #swagger.summary = 'Adicionar o usuario'
    #swagger.description = 'Responsavel por adicionar um novo usuário'
    #swagger.security = [{"Bearer":[]}]
    
    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Usuario'},
        description: 'Retorna o usuário cadastrado'
    }
    #swagger.responses[400]={
        schema: {mensagem: "falta de dados ou dados informados de forma errada"},
        description: 'Retorna uma mensagem de erro'
    }

*/);

routes.delete('/del/:id', autenticacao, UsuarioController.delete
/*      
    #swagger.tags = ['Usuário']
    #swagger.summary = 'Deleta o usuário'
    #swagger.description = 'Responsavel por deletar um usuario selecionado seu id'
    #swagger.security = [{"Bearer":[]}]
    #swagger.parameters['id'] = {
        type: 'Integer',
        description: 'Id do usuário'
    }
    
    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Usuario'},
        description: 'Retorna o usuário excluido'
    }
    #swagger.responses[400]={
        schema: {mensagem: "Usuário não encontrado"},
        description: 'Retorna uma mensagem de error'
    }

*/);

routes.put('/upd/:id', autenticacao, UsuarioController.update
/*
    #swagger.tags = ['Usuário']
    #swagger.summary = 'Atualizar o usuário'
    #swagger.description = 'Responsavel por atualizar um usuario selecionado pelo Id'
    #swagger.security = [{"Bearer":[]}]
    #swagger.parameters['id'] = {
        type: 'Integer',
        description: 'Id do usuário'
    }
    
    #swagger.responses[200]={
        schema: {$ref: '#/definitions/Usuario'},
        description: 'Retorna o usuário atualizado'
    }
    #swagger.responses[400]={
        schema: {mensagem: "Usuário não encontrado"},
        description: 'Retorna uma mensagem de error'
    }
    
*/);

module.exports = routes;