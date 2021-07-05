const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');
const autenticacao = require('../middleware/autenticacao')
const routes = Router();

routes.get('/listar/id/:id', autenticacao, UsuarioController.getOne
/*      
    #swagger.tags = ['Usuário']
    #swagger.description = 'Responsavel por selecionar um usuário pelo parametro Id'
    #swagger.security = [{"Bearer":[]}]
    #swagger.parameters['id'] = {
        type: 'Integer',
        description: 'Id usuário'
    }

    #swaggwe.response[200]={
        schema: {$ref: '#/description/Usuario'},
        description: 'Retorna um usuário
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Usuário não encontrado"},
        description: 'Retorna uma mensagem usuário não encontrado'
    }

*/);

routes.post('/add', autenticacao, UsuarioController.create
/*      
    #swagger.tags = ['Usuário']
    #swagger.description = 'Responsavel por adicionar um novo usuário'
    #swagger.security = [{"Bearer":[]}]
    
    #swaggwe.response[200]={
        schema: {$ref: #/description/Usuario},
        description: 'Retorna o usuário cadastrado'
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Usuário não encontrado"},
        description: 'Retorna um erro por falta de dados ou dados informados de forma errada.'
    }

*/);

routes.delete('/del/:id', autenticacao, UsuarioController.delete
/*      
    #swagger.tags = ['Usuário']
    #swagger.description = 'Responsavel por deletar um usuario selecionado pelo Id'
    #swagger.security = [{"Bearer":[]}]
    #swagger.parameters['id'] = {
        type: 'Integer',
        description: 'Id do usuário'
    }
    
    #swaggwe.response[200]={
        schema: {$ref: #/description/Usuario},
        description: 'Retorna o usuário excluido'
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Usuário não encontrado"},
        description: 'Retorna uma mensagem usuário não encontrado'
    }

*/);

routes.put('/upd/:id', autenticacao, UsuarioController.update
/*
    #swagger.tags = ['Usuário']
    #swagger.description = 'Responsavel por atualizar um usuario selecionado pelo Id'
    #swagger.security = [{"Bearer":[]}]
    #swagger.parameters['id'] = {
        type: 'Integer',
        description: 'Id do usuário'
    }
    
    #swaggwe.response[200]={
        schema: {$ref: #/description/Usuario},
        description: 'Retorna o usuário atualizado'
    }
    #swaggwe.response[400]={
        schema: {mensagem: "Usuário não encontrado"},
        description: 'Retorna uma mensagem usuário não encontrado'
    }
    
*/);

module.exports = routes;