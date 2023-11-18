const express = require("express");
const plants = express.Router();
const {
  getAllPlants,
  getOnePlant,
  createPlant,
  deletePlant,
  updatePlant,
} = require("../queries/plant");
const {
  checkName,
  checkDescription,
  checkMoistureNeeds,
  checkBoolean,
} = require("../validations/checkPlants");

plants.get("/", async (req, res) => {
  const allPlants = await getAllPlants();
  if (allPlants) {
    res.status(200).json(allPlants);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

plants.get("/:id", async (req, res) => {
  const { id } = req.params;
  const onePlant = await getOnePlant(id);
  if (onePlant.id) {
    res.status(200).json(onePlant);
  } else {
    res.status(404).json({ error: "Plant Not Found" });
  }
});

plants.post(
  "/",
  checkName,
  checkDescription,
  checkMoistureNeeds,
  checkBoolean,
  async (req, res) => {
    const body = req.body;
    const newPlant = await createPlant(body);
    res.status(200).json(newPlant);
  }
);

plants.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPlant = await deletePlant(id);
  const allPlants = await getAllPlants();
  if (deletedPlant.id) {
    res.status(200).json(allPlants);
  } else {
    res.status(404).json({ error: "Plant Not Found" });
  }
});

plants.put(
  "/:id",
  checkName,
  checkDescription,
  checkMoistureNeeds,
  checkBoolean,
  async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const updatedPlant = await updatePlant(id, body);
    if (updatedPlant.id) {
      res.status(200).json(updatedPlant);
    } else {
      res.status(404).json({ error: "Plant Not Found" });
    }
  }
);

module.exports = plants;
