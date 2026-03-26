const express = require("express")
const router = express.Router()
const {signUp} = require("../controllers/authController")

router.post("/auth/signUp", signUp)

module.exports = router