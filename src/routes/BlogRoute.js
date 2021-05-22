const BlogGetController = require('../controllers/BlogGetController')
const BlogGetOneController = require('../controllers/BlogGetOneController')

const router = require('express').Router()


router.get('/all', BlogGetController)
router.get('/:slugify', BlogGetOneController)

module.exports = {
    router, path: "/blog"
}