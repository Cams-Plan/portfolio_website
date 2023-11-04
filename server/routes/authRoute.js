// auth routes
const express = require('express')
const router = express.Router()
const authenticator = require("../middleware/authenticator")
const {login, logout} = require("../controllers/authController")

router.post('/login', login)
router.delete('/logout', authenticator, logout)

module.exports = router;
