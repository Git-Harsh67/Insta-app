const express = require("express")
const verifyToken = require("../middlewares/postmiddle")
const { follow , unfollow , userProfile} = require("../controllers/userController")
const router = express.Router()

router.get("/profile",verifyToken , userProfile )
router.put("/follow",verifyToken , follow )
router.put("/unfollow",verifyToken , unfollow )

module.exports = router 