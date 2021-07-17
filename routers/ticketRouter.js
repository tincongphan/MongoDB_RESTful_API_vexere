
const express = require('express');
const { createTicketController } = require('../controllers/ticketController');
const ticketRouter = express.Router()
// create trip
ticketRouter.post("/", createTicketController)

module.exports = {
    ticketRouter
}