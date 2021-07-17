
const express = require("express");
const { loginRouter } = require("./loginRouter");
const { stationRouter } = require("./stationRouter");
const { ticketRouter } = require("./ticketRouter");
const { tripRouter } = require("./tripRouter");
const { userRouter } = require("./userRouter");
const rootRouter = express.Router();

rootRouter.use("/api/stations", stationRouter)
rootRouter.use("/api/trips", tripRouter)
rootRouter.use("/api/users", userRouter)
rootRouter.use("/api/tickets", ticketRouter)
rootRouter.use("/api/login", loginRouter)

module.exports = { rootRouter }