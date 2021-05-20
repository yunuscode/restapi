const FilePostUploadController = require('../controllers/FilePostUploadController')
const AuthMiddleware = require('../middlewares/AuthMiddleware')
const fileUpload = require('express-fileupload')

const router = require('express').Router()

router.use(AuthMiddleware)

router.post('/upload', fileUpload(), FilePostUploadController)

module.exports = {
    router, path: "/file"
}