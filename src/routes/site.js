const express = require('express')
const router = express.Router()

const sitecontrollers = require('../app/controllers/SiteControllers')

router.use('/search', sitecontrollers.search)
router.use('/', sitecontrollers.home)

module.exports = router;