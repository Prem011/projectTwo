const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    rollNo : Number,
    studentDp : String
})

const userModel = mongoose.model("UserModel", userSchema)
module.exports = userModel