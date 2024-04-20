const express = require('express')
const router = express.Router()

const {
  getAllUsers, saveUser
} = require('./../controllers/users')

router.get('/', getAllUsers)

router.post('/', saveUser)

module.exports = router