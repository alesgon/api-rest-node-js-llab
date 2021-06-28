const mongoose = require('../database');

const ClienteSchema = new mongoose.Schema({
    cd_cliente : {
        type: Number,
        required: true,
        unique: true
    },
    nome : {
        type: String,
        required: true
    },
    cpf : {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
});

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;