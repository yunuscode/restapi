const { compare } = require('../modules/bcrypt')
const { genereteJWTToken } = require('../modules/jwt')
const LoginValidation = require('../validations/LoginValidation')

module.exports = async (req, res) => {
    try {
        let { phone, password } = await LoginValidation.validateAsync(req.body)
        let user = await req.psql.users.findOne({
            where: {
                phone
            }
        })
        if(!user) throw new Error("User is not defined")
        let isTrust = await compare(password, user.dataValues.password)
        if(!isTrust) throw new Error("Password is incorrect")
        let useragent = req.headers["user-agent"]
        let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
        if(!(useragent && ip)) throw new Error("Invalid request")
        let { id: sessionId } = await req.psql.sessions.create({
            user_id: user.id,
            ipAddress: ip,
            userAgent: useragent
        })

        let token = genereteJWTToken({ id: sessionId })

        res.status(200).json({
            ok: true,
            message: "Successfully logged in",
            data: {
                token
            }
        })
    }
    catch(e) {
        res.status(400).json({
            ok: false,
            message: e + ""
        })
    }
}