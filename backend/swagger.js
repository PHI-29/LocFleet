const swaggerAuto = require('swagger-autogen')();

const outputFile = './file_documentacao.json';
const routes = ['./index.js'];

swaggerAuto(outputFile, routes).then(()=>{
    require('./index.js')
})