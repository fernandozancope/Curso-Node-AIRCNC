const express = require('express');

const app = express();

// MÉTODOS GET - Buscar informações do backend
// POST - Criar informações do backend
// PUT - Editar informação
// DELETE - Apagar informação

app.get('/', (req, res) => {
    return res.json({ message: "Hello Fernando" });
});

app.listen(3333);