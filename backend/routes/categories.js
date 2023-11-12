const express = require('express')
const categoryController = require('../controllers/category')
const router = express.Router({ mergeParams: true })

router.get('/', categoryController.getAllCategories)
router.get('/:id', categoryController.getCategoryById)
router.post('/add', categoryController.addCategory)

module.exports = router