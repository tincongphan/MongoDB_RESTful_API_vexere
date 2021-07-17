
const { Seat } = require("../models/SeatsModel");
const { Trip } = require("../models/TripModel")

let codes = ["A01", "A02", "A03", "A04", "A05", "A06", "A07", "A08", "A09", "A10", "A11", "A12",
    "B01", "B02", "B03", "B04", "B05", "B06", "B07", "B08", "B09", "B10", "B11", "B12"]

// create Trip controller
const createTripController = async (req, res) => {
    let seats = [];
    codes.forEach(code => {
        const newSeats = new Seat({ code })
        seats.push(newSeats)
    });
    const { fromStation, toStation, startTime, prices } = req.body;
    try {
        const newTrip = new Trip({
            fromStation,
            toStation,
            startTime,
            prices,
            seats
        })
        await newTrip.save()
        res.status(201).send(newTrip)
    } catch (error) {
        res.status(500).send(error)
    }
}

// get list trip
const listTripsController = async (req, res) => {
    try {
        const listTrips = await Trip.find()
        res.status(200).send(listTrips)
    } catch (error) {
        res.status(500).send(error)
    }
}
// detail trip
const tripDetailController = async (req, res) => {
    const { id } = req.params;
    try {
        const detailTrip = await Trip.findById(id)
        res.status(200).send(detailTrip)
    } catch (error) {
        res.status(500).send(error)
    }
}
// delete trip

const deleteTripController = async (req, res) => {
    const { id } = req.params
    try {
        await Trip.findOneAndDelete({ _id: id })
        res.status(200).send("delete success")
    } catch (error) {
        res.status(500).send(error)
    }
}

// update trip
const updateTripController = async (req, res) => {
    const { fromStation, toStation, startTime, prices } = req.body;
    const { id } = req.params;
    try {
        await Trip.findOneAndUpdate({ _id: id }, {fromStation, toStation, startTime, prices })
        res.status(200).send("update successfully")
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createTripController,
    listTripsController,
    tripDetailController,
    deleteTripController,
    updateTripController
}