const express = require('express');

const Cliente = require('../models/Cliente');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email } = req.body;

        if (await Cliente.findOne({ email }))
            return res.status(400).send('error: E-mail informado já existe');

        const cliente = await Cliente.create(req.body);
        return res.send({ cliente });
    } catch (err) {        
        return res.status(400).send('error: Não foi possível incluir o cliente');
    }
});

router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        return res.send({ clientes });    
    } catch (err) {        
        return res.status(400).send('error: Não foi possível listar os clientes');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const clientes = await Cliente.findOne({ 'cd_cliente': id });
        return res.send({ clientes });    
    } catch (err) {        
        return res.status(400).send('error: Não foi possível listar o cliente');
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.updateOne({ 'cd_cliente': id }, req.body);
        return res.send({ cliente });
    } catch (err) {        
        return res.status(400).send('error: Não foi possível atualizar o cliente');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.remove({ 'cd_cliente': id });
        return res.send({ cliente });
    } catch (err) {
        return res.status(400).send('error: Não foi possível deletar o cliente');
    }
});

module.exports = app => app.use('/clientes', router);