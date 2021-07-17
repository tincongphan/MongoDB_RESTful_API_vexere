
const express = require('express');
const { createUserController,
    listUsersController,
    userDetailController,
    updateUserController,
    deleteUserController } = require('../controllers/userController');
const checkExistMiddleware = require('../middleware/checkExistMiddleware');
const { User } = require('../models/UserModel');
const userRouter = express.Router();

// create user
userRouter.post("/", createUserController)
// get list user
userRouter.get("/", listUsersController)
// user detail
userRouter.get("/:id", checkExistMiddleware(User), userDetailController)
// update user
userRouter.put("/:id", checkExistMiddleware(User), updateUserController)
// delete user
userRouter.delete("/:id", checkExistMiddleware(User), deleteUserController)

module.exports = {
    userRouter
}