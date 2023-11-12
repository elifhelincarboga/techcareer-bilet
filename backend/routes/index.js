const express = require('express')

const authRoute = require('./auth')
const usersRoute = require('./users')
const eventsRoute = require('./events')
const categoriesRoute = require('./categories')
const locationsRoute = require('./locations')
const authorize = require('../middleware/authorize/authorize')

const router = express.Router()

router.use('/auth', authRoute)
router.use('/users', usersRoute)
router.use('/events', authorize.authorize, eventsRoute)
router.use('/categories', authorize.authorize, categoriesRoute)
router.use('/locations', authorize.authorize, locationsRoute)

module.exports = router