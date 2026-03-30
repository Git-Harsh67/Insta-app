const express = require("express")
const router = express.Router()
const {createPost } = require("../controllers/postController")
const verifyToken = require("../middlewares/postmiddle")

router.post("/createPost",verifyToken,createPost)

module.exports = router