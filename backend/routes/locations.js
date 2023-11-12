const express = require('express')
const locationController = require('../controllers/location')
const router = express.Router({ mergeParams: true })

router.get('/', locationController.getAllLocations)
router.get('/:id', locationController.getLocationById)
router.post('/add', locationController.addLocation)

module.exports = router