const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const company = new Schema({
    nome: {
        type: String,
        required: true
    },
    documento: {
        type: Number,
        unique: true,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    coordenadaX: {
        type: Number,
        required: true
    },
    coordenadaY :{
        type: Number,
        required: true
    },
    informacoes: {}
})

module.exports = mongoose.model('company', company)