const express = require("express");
const app = express();

const herbsController = require("./controllers/herbsController");

// Middleware
app.use(express.json());
app.use("/herbs", herbsController);

// Routes:
app.get("/", (req, res) => {
  res.send("Welcome to the Portfolio App!");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page Not Found" });
});

module.exports = app;
