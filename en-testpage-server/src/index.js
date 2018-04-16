require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const api = require('./api');

const {
    PORT : port
} = process.env;

app.use(bodyParser.urlencoded({entended: true}));
app.use(bodyParser.json());

app.use('/api', api);

/*app.get('*', (req, res) => {
    res.send('heelo');
});*/

app.listen(port , () => {
    console.log(`server start {port}`)
});