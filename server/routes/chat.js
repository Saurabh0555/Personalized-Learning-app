const express = require("express")
const router = express.Router()
const { queryChat } = require("../controllers/Chat")

// Public chat search endpoint
router.post("/query", queryChat)

module.exports = router
