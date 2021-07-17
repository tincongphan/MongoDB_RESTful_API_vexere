
const express = require('express');
const { loginController } = require('../controllers/loginController');
const loginRouter = express.Router();

// create login
loginRouter.get("/", loginController)

module.exports = {
    loginRouter
}