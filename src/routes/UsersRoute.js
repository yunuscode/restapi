const router = require('express').Router()
const UsersDeleteAllSessionsController = require('../controllers/UsersDeleteAllSessionsController')
const UsersDeleteSessionController = require('../controllers/UsersDeleteSessionController')
const UsersGetController = require('../controllers/UsersGetController')
const UsersGetSessionController = require('../controllers/UsersGetSessionController')
const UsersLoginPostController = require('../controllers/UsersLoginPostController')
const UsersSignUpPostController = require('../controllers/UsersSignUpPostController')

const AuthMiddleware = require('../middlewares/AuthMiddleware')


router.get('/', UsersGetController)
router.post('/signup', UsersSignUpPostController)
router.post('/login', UsersLoginPostController)
router.get('/sessions', AuthMiddleware, UsersGetSessionController)
router.delete('/sessions/deleteAll', AuthMiddleware, UsersDeleteAllSessionsController)
router.delete('/sessions/:id', AuthMiddleware, UsersDeleteSessionController)

module.exports = {
    router, path: "/users"
}