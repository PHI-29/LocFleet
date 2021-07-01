const express = require('express');
const routes = require('./routes/routes');
require('dotenv').config({ path: './token.env' });
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const PORT = process.env.PORT || 3000
app.listen(PORT);