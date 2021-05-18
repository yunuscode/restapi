const router = require('express').Router()
const UsersGetController = require('../controllers/UsersGetController')
const UsersLoginPostController = require('../controllers/UsersLoginPostController')
const UsersSignUpPostController = require('../controllers/UsersSignUpPostController')


router.get('/', UsersGetController)
router.post('/signup', UsersSignUpPostController)
router.post('/login', UsersLoginPostController)

module.exports = {
    router, path: "/users"
}