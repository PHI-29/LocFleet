const swaggerAuto = require('swagger-autogen')();

const outputFile = './file_documentacao.json';
const routes = ['./index.js'];
const docs = {
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "title": "API LocFleet, gerenciamento de frotas",
        "description": "Essa API tem como objetivo promover o gerenciamento de frotas para o usuário, listando os veículos e motoristas cadastrados, com seus respectivos dados, e a locação de cada veículo atualizada com seus valores."
    },
    "host": "localhost:3000",
    "basePath": "/",
    "tags": [],
    "schemes": [
        "http",
        "https"
    ],
    "securityDefinitions": {
        "Bearer": {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header",
        }
    },
    "consumes": ["application/json"],
    "produces": ["application/json"],
    "definitions": {
        Usuario: {
            email: "nome@email.com",
            nome: "Nome",
            sobrenome: "Sobrenome",
            dtNascimento: "2000-01-01",
            cpf: 01010101010,
            telefone: 3101010101,
            celular: 31910101010,
            senha: 'Aa11111',
        },
        Veiculo: {
            modelo: "Gol",
            marca: "Volkswagen",
            ano: 2007,
            placa: "aaa1111",
            renavam: 010101010,
            cor: "prata",
            km: 300000,
            ulRevisao: "2015-01-01",
            loc: "Estacionamento empresa",
            valor: 0,
        },
        Motorista: {
            email: "nome@email.com",
            nome: "Nome",
            sobrenome: "Sobrenome",
            dtNascimento: "2000-01-01",
            cpf: 01010101010,
            tel: 3101010101,
            cel: 31910101010,
            dtEmissao: "2019-01-01",
            dtvencimento: "2029-01-01",
            numCNH: 01010101010,
            cep: 01010101,
        }
    },
}

swaggerAuto(outputFile, routes, docs).then(() => {
    require('./index.js')
})