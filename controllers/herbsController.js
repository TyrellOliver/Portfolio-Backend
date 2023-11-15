const express = require('express');
const herbs = express.Router();

herbs.get('/', (req, res) =>{
    res.send('Welcome to the herbs page!')
});

module.exports = herbs;