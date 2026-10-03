const express = require("express")
const verifyToken = require("../middlewares/postmiddle")
const { follow , unfollow , userProfile, editProfile} = require("../controllers/userController")
const router = express.Router()

router.get("/profile",verifyToken , userProfile )
router.patch("/editProfile",verifyToken , editProfile )
router.put("/follow/:id",verifyToken , follow )
router.put("/unfollow/:id",verifyToken , unfollow )

module.exports = router 