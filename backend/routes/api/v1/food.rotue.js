const express = require("express");
const {
  readFoodHandler,
  createFoodHandler,
  deleteFoodHandler,
} = require("../../../controller/food.controller");
const foodRoute = express.Router();

foodRoute.get("/", readFoodHandler);
foodRoute.post("/", createFoodHandler);
foodRoute.delete("/foodId", deleteFoodHandler);

module.exports = foodRoute;
