const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    description: {
        type: String
    },
    photo: {
        type: String
    },
    comment: [
        {
            text: String,
            postedBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        },
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    ],
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model("Post", postSchema)