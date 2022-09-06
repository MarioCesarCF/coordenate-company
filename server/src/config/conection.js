const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () => {
    const URL = process.env.DB_URL;
    if(global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on('error', () => {
        console.log('Erro de conexão.');
    });

    db.on('open', () => {
        console.log('Sucesso de conexão.');
    });

    global.connection = db;
}

connection();

module.exports = connection;