const db = require("../db/dbConfig");

const getAllPlants = async () => {
  try {
    const allPlants = await db.any("SELECT * FROM plants ORDER BY name ASC");
    return allPlants;
  } catch (error) {
    return error;
  }
};

const getOnePlant = async (id) => {
  try {
    const onePlant = await db.one("SELECT * FROM plants WHERE id=$1", id);
    return onePlant;
  } catch (error) {
    return error;
  }
};

const createPlant = async (plant) => {
  try {
    const newPlant = await db.one(
      "INSERT INTO plants (name, price, in_stock, moisture_needs, description, safe_for_pets, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        plant.name,
        plant.price,
        plant.in_stock,
        plant.moisture_needs,
        plant.description,
        plant.safe_for_pets,
        plant.image_url,
      ]
    );
    return newPlant;
  } catch (error) {
    return error;
  }
};

const deletePlant = async (id) => {
  try {
    const deletedPlant = await db.one(
      "DELETE FROM plants WHERE id=$1 RETURNING *",
      id
    );
    return deletedPlant;
  } catch (error) {
    return error;
  }
};

const updatePlant = async (id, plant) => {
  try {
    const updatedPlant = await db.one(
      "UPDATE plants SET name=$1, price=$2, in_stock=$3, moisture_needs=$4, description=$5, safe_for_pets=$6, image_url=$7 WHERE id=$8 RETURNING *",
      [
        plant.name,
        plant.price,
        plant.in_stock,
        plant.moisture_needs,
        plant.description,
        plant.safe_for_pets,
        plant.image_url,
        id,
      ]
    );
    return updatedPlant;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPlants,
  getOnePlant,
  createPlant,
  deletePlant,
  updatePlant,
};
