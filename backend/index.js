const express = require('express');
const routes = require('./routes/routes');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./file_documentacao.json')
require('dotenv').config({ path: './token.env' });
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes);

const PORT = process.env.PORT || 3000
app.listen(PORT,(
    console.log('servidor online')
));