const express = require('express')
const route = express.Router()
const newscontrollers = require('../app/controllers/NewsControllers')

route.use('/:slug', newscontrollers.show)
route.use('/', newscontrollers.index)

module.exports = router;