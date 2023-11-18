const db = require("../db/dbConfig");

const getAllPlants = async () => {
  try {
    const allPlants = await db.any("SELECT * FROM plants");
    return allPlants;
  } catch (error) {
    return error;
  }
};

const getOnePlant = () => {};

const createPlant = () => {};

const deletePlant = () => {};

const updatePlant = () => {};

module.exports = {
  getAllPlants,
  getOnePlant,
  createPlant,
  deletePlant,
  updatePlant,
};
