require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const api = require('./api');
const path = require('path');

const {
    PORT : port
} = process.env;

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

app.use('/api', api);

app.use('/', express.static(__dirname+'/../../en-testpage/build'));
app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, '../../en-testpage/build', 'index.html'));
});

app.listen(port , () => {
    console.log(`server start {port}`)
});