
const express = require('express')
const router = express.Router()
const UsersController = require('../controller/users.controller')
// const jwtCheck = require('../middlewares/jwtCheckmiddleware')


router.get('/getusers', UsersController.getUsers)
router.post('/createUsers', UsersController.createUser)
router.get('/getusersById/:userId', UsersController.getUsersById)
router.put('/updateUsersById/:userId', UsersController.updateUsersById)
router.delete('/deleteUsersById/:userId', UsersController.deleteUsersById)


module.exports = router