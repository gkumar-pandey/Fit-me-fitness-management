const express = require("express");
const {
  readTargetHandler,
  createTargetHandler,
  deleteTargetHandler,
} = require("../../../controller/target.controller");
const targetRoute = express.Router();

targetRoute.get("/", readTargetHandler);
targetRoute.post("/", createTargetHandler);
targetRoute.delete("/:targetId", deleteTargetHandler);

module.exports = targetRoute;
