const express = require("express")
const router = express.Router()
const {createPost , allPost , myPost , delPost ,likePost ,unLikePost, comment ,test, delComment} = require("../controllers/postController")
const verifyToken = require("../middlewares/postmiddle")

router.post("/createPost",verifyToken,createPost)
router.get("/allPost",verifyToken,allPost)
router.get("/myPost",verifyToken,myPost)
router.delete("/delPost/:id",verifyToken,delPost)
router.put("/likePost/:id",verifyToken,likePost)
router.put("/unLikePost/:id",verifyToken,unLikePost)
router.put("/comment/:id",verifyToken,comment)
router.put("/delComment/:id",verifyToken,delComment)



// router.get("/test",verifyToken,test)
module.exports = router