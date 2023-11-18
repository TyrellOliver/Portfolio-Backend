const express = require('express');
const plants = express.Router();

plants.get('/', (req, res) =>{
    res.send('Welcome to the plants page!')
});

module.exports = plants;