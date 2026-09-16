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
    bio: {
        type: String
    }, 
    userName: {
        type: String,
        required: true,
        unique: true
    },
    pic: {
        type: String
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
    ]
},
    {
        timestamps: true
    })

module.exports = mongoose.model("User", userDetails)