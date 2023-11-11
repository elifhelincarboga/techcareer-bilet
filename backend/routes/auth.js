const express = require('express')
const authController = require('../controllers/auth')
const router = express.Router({ mergeParams: true })

router.get('/login', authController.login)
router.post('/token', authController.token)
router.delete('/logout/:token', authController.logout)

module.exports = router