const express = require("express");
const app = express();

const cors = require("cors")

const plantsController = require("./controllers/plantsController");

// Middleware
app.use(cors())
app.use(express.json());
app.use("/plants", plantsController);

// Routes:
app.get("/", (req, res) => {
  res.send("Welcome to the Portfolio App!");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page Not Found" });
});

module.exports = app;
