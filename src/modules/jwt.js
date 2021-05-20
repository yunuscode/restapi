const { verify, sign } = require('jsonwebtoken')

module.exports.genereteJWTToken = function genereteJWTToken(data) {
    return sign(data, "SECRET_WORD")
}

module.exports.checkToken = function checkToken(key) {
    return verify(key, "SECRET_WORD")
}
