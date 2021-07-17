
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 1: definding a Schema
const UserSchema = new Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },
    fullname: { type: String, require: true },
    userType: { type: String, default: "client" },
    
})

// 2: definding a Model
const User = mongoose.model("User", UserSchema)

module.exports = {
    User,
    UserSchema
};
