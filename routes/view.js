const express = require('express')
const router = express.Router()
const viewController = require('../controllers/view')

router.get('/', viewController.getData)

module.exports = router
