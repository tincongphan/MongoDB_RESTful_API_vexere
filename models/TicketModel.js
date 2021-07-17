
const mongoose = require('mongoose');
const { SeatsSchema } = require('./SeatsModel');
const Schema = mongoose.Schema;

// 1: definding a Schema

const TicketSchema = new Schema({
    tripId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trip"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    seats: { type: [SeatsSchema] },
})

// 2: definding a Model

const Ticket = mongoose.model("Ticket", TicketSchema)

module.exports = Ticket;
