
const bcryptjs = require('bcryptjs');
const { User } = require('../models/UserModel');
const jwt = require("jsonwebtoken")
const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        // 1.compare email
        const userLogin = await User.findOne({ email })
        if (userLogin) {
            // 2. compare password
            const isAuth = bcryptjs.compareSync(password, userLogin.password)
            if (isAuth) {
                const payload = {
                    id: userLogin._id,
                    email: userLogin.email,
                    userType: userLogin.userType
                }
                const secretKey = "benxelientinh"
                const token = jwt.sign(payload, secretKey)
                res.status(200).send({ message: "Login success", token })
            } else {
                res.status(400).send("Password invalid")
            }
        } else {
            res.status(404).send("Email invalid")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    loginController,
}