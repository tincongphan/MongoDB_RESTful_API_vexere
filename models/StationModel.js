
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 1: definding a Schema

const StationSchema = new Schema({
    name: { type: String, require: true },
    address: { type: String, require: true },
    province: { type: String, require: true }
})

// 2: definding a Model

const StationModel = mongoose.model("Station", StationSchema)

module.exports = StationModel;
