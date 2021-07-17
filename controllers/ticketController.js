const { Seat } = require("../models/SeatsModel");
const Ticket = require("../models/TicketModel")

// create ticket
const createTicketController = async (req, res) => {
    const { tripId, userId, seatUserChoose } = req.body;
    const seats = [];
    seatUserChoose.forEach(code => {
        const newSeat = new Seat({ code, isBooked : true })
        seats.push(newSeat)
    });
    try {
        const newTicket = new Ticket({ tripId, userId, seats})
        await newTicket.save()
        res.status(200).send(newTicket)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createTicketController
}