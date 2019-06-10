// index.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// initial express app
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("it's working Ada :)"); 
});

app.listen(port, () => {
    console.log('Server is up and running of port: ' + port);
});