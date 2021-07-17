
const mongoose = require('mongoose');
const { SeatsSchema } = require('./SeatsModel');
const Schema = mongoose.Schema;

// 1: definding a Schema
const TripSchema = new Schema({
    fromStation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StationModel"
    },
    toStation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StationModel"
    },
    startTime: { type: Date, require: true },
    seats: { type: [SeatsSchema] },
    prices: { type: Number, require: true }

})

// 2: definding a Model
const Trip = mongoose.model("Trip", TripSchema)

module.exports = {
    Trip,
    TripSchema
};
