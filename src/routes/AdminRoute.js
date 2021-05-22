const AdminsGetController = require('../controllers/AdminsGetController')
const BlogCreatePostController = require('../controllers/BlogCreatePostController')
const AdminMiddleware = require('../middlewares/AdminMiddleware')
const AuthMiddleware = require('../middlewares/AuthMiddleware')

const router = require('express').Router()

router.use(AuthMiddleware)
router.use(AdminMiddleware)


router.get('/', AdminsGetController)
router.post('/blog/create', BlogCreatePostController)

module.exports = {
    router, path: "/admin"
}