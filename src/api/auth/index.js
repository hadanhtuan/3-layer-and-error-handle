const authController = require('./auth.controller.js')
const router = require('express').Router()


router.post('/login', authController.login)      //               /api/v1/auth/login
router.post('/register', authController.register)      //               /api/v1/auth/login