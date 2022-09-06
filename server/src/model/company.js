const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const company = new Schema({
    nome: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    coordenadaX: {
        type: String,
        required: true
    },
    coordenadaY :{
        type: String,
        required: true
    },
    informacoesGeriais: {}
})

module.exports = mongoose.model('company', company)