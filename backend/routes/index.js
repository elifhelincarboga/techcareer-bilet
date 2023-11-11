const express = require('express')

const authRoute = require('./auth')
const eventsRoute = require('./events')
const authorize = require('../middleware/authorize/authorize')

const router = express.Router()

router.use('/auth', authRoute)
router.use('/events', authorize.authorize, eventsRoute)

module.exports = router