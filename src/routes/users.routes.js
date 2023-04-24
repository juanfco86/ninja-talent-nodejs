
const express = require('express')
const router = express.Router()
const UsersController = require('../controller/users.controller')
// const jwtCheck = require('../middlewares/jwtCheckmiddleware')


router.get('/prueba', UsersController.prueba)


module.exports = router