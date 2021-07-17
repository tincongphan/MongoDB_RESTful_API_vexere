
const express = require('express');
const { createTripController, listTripsController, tripDetailController, updateTripController, deleteTripController } = require('../controllers/tripController');
const checkExistMiddleware = require('../middleware/checkExistMiddleware');
const { Trip } = require('../models/TripModel');
const tripRouter = express.Router();

// create trip
tripRouter.post("/", createTripController)
// get list trip
tripRouter.get("/", listTripsController)
// trip detail
tripRouter.get("/:id", checkExistMiddleware(Trip), tripDetailController)
// update trip
tripRouter.put("/:id", checkExistMiddleware(Trip), updateTripController)
// delete trip
tripRouter.delete("/:id", checkExistMiddleware(Trip), deleteTripController)
module.exports = {
    tripRouter
}