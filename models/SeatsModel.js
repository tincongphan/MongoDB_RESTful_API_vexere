
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 1: definding a Schema
const SeatsSchema = new Schema({
    code: { type: String, require: true }, // code: mã ghế ngồi
    isBooked: { type: Boolean, default: false }
})

// 2: definding a Model
const Seat = mongoose.model("Seat", SeatsSchema)

module.exports = {
    Seat,
    SeatsSchema
};
