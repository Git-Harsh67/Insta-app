const User = require("../models/user")

exports.follow = async (req, res) => {
    try {
        const userToFollow = req.body.followID

        const follower = await User.findByIdAndUpdate(userToFollow, {
            $addToSet: {
                followers: req.user
            }
        }, {  new: true})

        const following = await User.findByIdAndUpdate(req.user, {
            $addToSet: { following: userToFollow }
        },
        { new: true })

        return res.status(201).json({
            msg: "You have followed successfully",
            follower,
            following
        })
    } catch (error) {
        return res.status(400).json({
            msg: "can't follow",
            error
        })
    }
}

exports.unfollow = async (req, res) => {
    try {
        const userToFollow = req.body.followID

        const follower = await User.findByIdAndUpdate(userToFollow, {
            $pull: {
                followers: req.user
            }
        }, {  returnDocument : "after"})

        const following = await User.findByIdAndUpdate(req.user, {
            $pull: { following: userToFollow }
        }, {  returnDocument : "after"})

        return res.status(201).json({
            msg: "You have unfollowed successfully",
            follower,
            following
        })
    } catch (error) {
        return res.status(400).json({
            msg: "can't follow",
            error
        })
    }
}