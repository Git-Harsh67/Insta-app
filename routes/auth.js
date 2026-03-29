const express = require("express")
const router = express.Router()
const {signUp , logIn} = require("../controllers/authController")

router.post("/auth/signUp", signUp)
router.post("/auth/login", logIn)

module.exports = router