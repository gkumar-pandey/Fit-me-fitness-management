const Food = require("../model/food.model");

const createFoodHandler = async (req, res) => {
  try {
    const foodData = req.body;

    const newFood = new Food(foodData);
    const savedFood = await newFood.save();

    return res.status(201).json({
      success: true,
      message: "Food created",
      food: savedFood,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error", error });
  }
};

const readFoodHandler = async (req, res) => {
  try {
    const foods = await Food.find();
    return res.status(200).json({ success: true, foods });
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return res
      .status(500)
      .json({ success: false, error, message: "Internal Server Error" });
  }
};

const deleteFoodHandler = async (req, res) => {
  try {
    const { foodId } = req.params;
    const foundFood = await Food.findById(foodId);
    if (!foundFood) {
      return res
        .status(404)
        .json({ success: false, message: "Food not found." });
    }
    await Food.findByIdAndRemove(foodId);
    return res.status(200).json({ success: true, message: "Food deleted" });
  } catch (error) {
    console.error("Error deleting exercise:", error);
    return res
      .status(500)
      .json({ success: false, error, message: "Internal Server Error" });
  }
};

module.exports = {
  createFoodHandler,
  deleteFoodHandler,
  readFoodHandler,
};
