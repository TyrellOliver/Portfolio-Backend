const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.send("Welcome to the Portfolio App!")
})

module.exports = app;