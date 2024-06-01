/*const express = require('express')
const router = express.Router()
const { registerUser } = require('../controllers/userController')
const { loginUser } = require('../controllers/userController')
const { getMe } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

//const { registerUser, loginUser, getMe } = require('../controllers/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router*/

const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router