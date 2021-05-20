const AdminsGetController = require('../controllers/AdminsGetController')
const AdminMiddleware = require('../middlewares/AdminMiddleware')
const AuthMiddleware = require('../middlewares/AuthMiddleware')

const router = require('express').Router()

router.use(AuthMiddleware)
router.use(AdminMiddleware)


router.get('/', AdminsGetController)

module.exports = {
    router, path: "/admin"
}