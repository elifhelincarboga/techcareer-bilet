const express = require('express')
const eventController = require('../controllers/event')
const router = express.Router({ mergeParams: true })

router.get('/', eventController.getAllEvents)
router.get('/:id', eventController.getEventById)
router.post('/add', eventController.addEvent)

module.exports = router