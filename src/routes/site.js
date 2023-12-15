const express = require('express')
const router = express.Router()

const sitecontrollers = require('../app/controllers/SiteControllers')

router.get('/search', sitecontrollers.search)
router.get('/', sitecontrollers.home)

module.exports = router;