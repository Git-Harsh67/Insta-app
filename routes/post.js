const express = require("express")
const router = express.Router()
const {createPost , allPost , myPost , delPost} = require("../controllers/postController")
const verifyToken = require("../middlewares/postmiddle")

router.post("/createPost",verifyToken,createPost)
router.get("/allPost",verifyToken,allPost)
router.get("/myPost",verifyToken,myPost)
router.get("/delPost/:id",verifyToken,delPost)

module.exports = router