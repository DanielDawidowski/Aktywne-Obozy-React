const express = require('express')
const router = express.Router()

const { create, eventById, read, update, remove, list } = require('../controllers/event')
const { userById } = require('../controllers/user')
const { requireSignin, isAdmin, isAuth } = require('../controllers/auth')

router.get('/event/:eventId', read)
router.post('/event/create/:userId', requireSignin, isAuth, isAdmin ,create)
router.put('/event/:eventId/:userId', requireSignin, isAuth, isAdmin, update)
router.delete('/event/:eventId/:userId', requireSignin, isAuth, isAdmin, remove)
router.get('/events', list)

router.param('eventId', eventById)
router.param("userId", userById)


module.exports = router;