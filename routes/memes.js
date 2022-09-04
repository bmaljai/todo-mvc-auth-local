const express = require('express')
const router = express.Router()
const memesController = require('../controllers/memes') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, memesController.getMemes)

router.post('/createMeme', memesController.createMeme)

router.delete('/deleteMeme', memesController.deleteMeme)

module.exports = router