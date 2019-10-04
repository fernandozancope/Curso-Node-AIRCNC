const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-yd7c8.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) 

// MÉTODOS GET - Buscar informações do backend
// POST - Criar informações do backend
// PUT - Editar informação
// DELETE - Apagar informação
// req.query - Acessar query params (para filtros)
// req.params - Acessar rout params (para edição, delete)
// req.body - Acessar corpo da requisição

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);