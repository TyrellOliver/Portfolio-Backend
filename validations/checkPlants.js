const checkName = (req, res, next) => {
  if (req.body.name) {
    return next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkDescription = (req, res, next) => {
    if(req.body.description){
        return next()
    } else {
        res.status(400).json({error:"The description is required"})
    }
};

const checkMoistureNeeds = (req, res, next) => {
    if(req.body.moisture_needs){
        return next()
    } else {
        res.status(400).json({error:"Moisture_needs is required"})
    }
};

const checkBoolean = (req, res, next) => {
    const safeForPets = req.body.safe_for_pets;
  if (typeof safeForPets === "boolean") {
    next();
  } else {
    res.status(400).json({ error: "safe_for_pets must be type boolean" });
  }
};

module.exports = {checkName, checkDescription, checkMoistureNeeds, checkBoolean};
