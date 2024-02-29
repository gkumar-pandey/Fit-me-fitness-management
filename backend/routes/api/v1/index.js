const express = require("express");
const exerciseRoute = require("./exercise.route");
const targetRoute = require("./target.route");
const foodRoute = require("./food.rotue");
const routes = express.Router();

routes.use("/exercises", exerciseRoute);
routes.use("/targets", targetRoute);
routes.use("/foods", foodRoute);
module.exports = routes;
