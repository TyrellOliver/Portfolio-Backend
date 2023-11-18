const express = require("express");
const plants = express.Router();
const {
  getAllPlants,
  getOnePlant,
  createPlant,
  deletePlant,
  updatePlant,
} = require("../queries/plant");

plants.get("/", async (req, res) => {
  const allPlants = await getAllPlants();
  console.log(`All the plants ${allPlants}`);
  if (allPlants) {
    res.status(200).json(allPlants);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = plants;
