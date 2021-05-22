const FilePostUploadController = require('../controllers/FilePostUploadController')
const AuthMiddleware = require('../middlewares/AuthMiddleware')
const fileUpload = require('express-fileupload')
const FileGetController = require('../controllers/FileGetController')

const router = require('express').Router()

router.use(AuthMiddleware)

router.post('/upload', fileUpload(), FilePostUploadController)
router.get('/', FileGetController)

module.exports = {
    router, path: "/file"
}