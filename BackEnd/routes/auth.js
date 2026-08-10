const express = require("express")
const router = express.Router()
const {signUp , logIn} = require("../controllers/authController")

router.post("/signUp", signUp)
router.post("/login", logIn)

module.exports = router