const express = require('express')
const router = express.Router()

const { create, clientById, read, update, remove, list } = require('../controllers/client')
const { userById } = require('../controllers/user')
const { requireSignin, isAdmin, isAuth } = require('../controllers/auth')

router.get('/client/:clientId', read)
router.post('/client/create/:userId', requireSignin, isAuth, isAdmin ,create)
router.put('/client/:clientId/:userId', requireSignin, isAuth, isAdmin, update)
router.delete('/client/:clientId/:userId', requireSignin, isAuth, isAdmin, remove)
router.get('/clients', list)

router.param('clientId', clientById)
router.param("userId", userById)


module.exports = router;