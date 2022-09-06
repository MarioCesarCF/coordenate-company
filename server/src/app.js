const express = require('express');
const app = express();

const index = require('./routes/index');
const companyRoute = require('./routes/companyRoute');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', index);
app.use('/company', companyRoute);

module.exports = app;