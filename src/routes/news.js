const express = require('express')
const router = express.Router()


const newscontrollers = require('../app/controllers/NewsControllers')

router.use('/search', newscontrollers.show)
router.use('/', newscontrollers.index)

module.exports = router;