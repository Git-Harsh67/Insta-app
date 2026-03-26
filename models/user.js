const mongoose = require("mongoose")

const userDetails = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        defaultPic: ""
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    ],
},
    {
        timestamps: true
    })

module.exports = mongoose.model("User", userDetails)