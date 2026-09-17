const User = require("../models/user")
const Post = require("../models/post")

exports.userProfile = async (req, res) => {
    try {
        const userDetails = await User.findById(req.user).select("-password")
        const userPosts = await Post.find({ postedBy: req.user })

        return res.status(200).json({
            user: userDetails,
            posts: userPosts
        })
    } catch (error) {
        return res.status(400).json({
            msg: "error , something is wrong",
            error
        })
    }


}

exports.editProfile = async (req, res) => {
    try {

        const { bio, pic, userName } = req.body

        const updateValue = {}

         if (userName !== undefined) updateValue.userName = userName
         if (pic !== undefined) updateValue.pic = pic
         if (bio !== undefined) updateValue.bio = bio

        const user = await User.findByIdAndUpdate(req.user,updateValue,
            {
                returnDocument: 'after'
            }
        )

        return res.status(200).json({
            msg: "Profile updated successfully",
            user
        })
    } catch (error) {
        return res.status(400).json({
            msg: "error , something is wrong",
            error
        })
    }
}

exports.follow = async (req, res) => {
    try {
        const userToFollow = req.body.followID
        // console.log(userToFollow)
        // console.log(req.user)

        if (userToFollow !== req.user) {

            const follower = await User.findByIdAndUpdate(userToFollow, {
                $addToSet: {
                    followers: req.user
                }
            }, { new: true })

            const following = await User.findByIdAndUpdate(req.user, {
                $addToSet: { following: userToFollow }
            },
                { new: true })

        }


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
        // console.log(userToFollow )
        // console.log("69d4c36797228781af600d76" !== userToFollow )
        if (userToFollow !== req.user) {

            const follower = await User.findByIdAndUpdate(userToFollow, {
                $pull: {
                    followers: req.user
                }
            }, { returnDocument: "after" })

            const following = await User.findByIdAndUpdate(req.user, {
                $pull: { following: userToFollow }
            }, { returnDocument: "after" })

        }

        return res.status(201).json({
            msg: "You have unfollowed successfully",
            follower,
            following
        })
    } catch (error) {
        return res.status(400).json({
            msg: "can't unfollow",
            error
        })
    }
}