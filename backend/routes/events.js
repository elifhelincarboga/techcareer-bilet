const express = require('express')
const eventController = require('../controllers/event')
const router = express.Router({ mergeParams: true })

router.get('/', eventController.getAllEvents)
router.get('/:id', eventController.getEvent)

module.exports = router