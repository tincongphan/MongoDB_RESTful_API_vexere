        
const express = require("express")
const { createStationController, getStationController, stationDetailController, updateStationController, deleteStationController } = require("../controllers/stationControllers")
const StationModel = require("../models/StationModel")
const checkExistMiddleware = require("../middleware/checkExistMiddleware")
const stationRouter = express.Router()

//  create station
stationRouter.post("/", createStationController)

//  get list station
stationRouter.get("/", getStationController)

//  get detail station
stationRouter.get("/:id", checkExistMiddleware(StationModel), stationDetailController)

//  update station
stationRouter.put("/:id", checkExistMiddleware(StationModel), updateStationController)

// delete station
stationRouter.delete("/:id", checkExistMiddleware(StationModel), deleteStationController)

module.exports = { stationRouter }