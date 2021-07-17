
const { User } = require("../models/UserModel")
const bcryptjs = require('bcryptjs');

// create user
const createUserController = async (req, res) => {
    const { email, password, fullname } = req.body;
    const salt = bcryptjs.genSaltSync(10);
    const hassPassword = bcryptjs.hashSync(password, salt)
    try {
        const user = await User.findOne({ email })
        if (user) {
            res.status(200).send("User is exist")
        } else {
            const newUser = new User({ email, password: hassPassword, fullname })
            await newUser.save()
            res.status(201).send(newUser)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

// list user
const listUsersController = async (req, res) => {
    try {
        const listUsers = await User.find()
        res.status(200).send(listUsers)
    } catch (error) {
        res.status(500).send(error)
    }
}

// user detail
const userDetailController = async (req, res) => {
    const { id } = req.params;
    try {
        const detailUser = await User.findById(id)
        res.status(200).send(detailUser)
    } catch (error) {
        res.status(500).send(error)
    }
}

// delete user
const deleteUserController = async (req, res) => {
    const { id } = req.params
    try {
        await User.findOneAndDelete({ _id: id })
        res.status(200).send("delete success")
    } catch (error) {
        res.status(500).send(error)
    }
}

// update user
const updateUserController = async (req, res) => {
    const { email, fullname } = req.body;
    const { id } = req.params;
    try {
        await User.findOneAndUpdate({ _id: id }, { email, fullname  })
        res.status(200).send("update successfully")
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createUserController,
    listUsersController,
    userDetailController,
    updateUserController,
    deleteUserController
}