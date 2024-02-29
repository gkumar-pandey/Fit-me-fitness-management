const express = require("express");
const {
  createExerciseHandler,
  readExerciseHandler,
  deleteExerciseHandler,
} = require("../../../controller/exercise.controller");
const exerciseRoute = express.Router();

exerciseRoute.get("/", readExerciseHandler);
exerciseRoute.post("/", createExerciseHandler);
exerciseRoute.delete("/:exerciseId", deleteExerciseHandler);

module.exports = exerciseRoute;
