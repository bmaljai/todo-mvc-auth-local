const express = require('express')
const router = express.Router()
const viewController = require('../controllers/view')

router.get('/memes', viewController.getMemes)
router.get('/users', viewController.getUsers)

module.exports = router
