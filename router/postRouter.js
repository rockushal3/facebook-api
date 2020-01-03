const express = require("express")
const router = express.Router()
const postController = require("../controller/postController")
router.post("/createpost",postController.addpost)
router.get("/findpost",postController.findpost)
router.get("/findpostById/:_id",postController.findpostById)

module.exports = router