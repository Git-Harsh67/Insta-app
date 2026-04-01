const Post = require("../models/post")

exports.createPost = async (req, res) => {
    try {
        const { title, description, postedBy, photo } = req.body

        if (!title || !description) {
            return res.status(422).json({
                msg: "All field required "
            })
        }
        const post = Post.create({
            title,
            description,
            postedBy: req.user,
            photo
        })

        return res.status(200).json({
            msg: "post created successfully",
            post
        })
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}

exports.allPost = async (req, res) => {
    try {
        const allPosts = await Post.find()

        return res.status(200).json({
            msg: "=Successfully fetch all post",
            allPosts
        })
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}

exports.myPost = async (req, res) => {
    try {
        const myPosts = await Post.find({
            postedBy: req.user
        })

        return res.status(200).json({
            msg: "Successfully fetch all post",
            myPosts
        })
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}

exports.delPost = async (req, res) => {
    try {
        const ID = req.params.id
        const myPosts = await Post.findById(ID)

        // console.log(myPosts)
        // console.log(myPosts.postedBy.toString() === req.user)
        
        if (myPosts.postedBy.toString() === req.user) {
            const del = await Post.findByIdAndDelete(ID)
            return res.status(200).json({
                msg: "This post is deleted"
            })
        }
        return res.status(200).json({
            msg: "Only the user who created the post can delete it "
        })
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}