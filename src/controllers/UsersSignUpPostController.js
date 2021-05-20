const { generateHash } = require('../modules/bcrypt');
const SignUpValidation = require('../validations/SignUpValidation')

module.exports = async (req, res) => {
    try {
        let { name, password, phone } = await SignUpValidation.validateAsync(req.body)
        let user = await req.psql.users.create({
            name,
            password: await generateHash(password),
            phone
        })
        user = {
            id: user.id,
            name: user.name,
            phone: user.phone
        }
        res.status(200).json({
            ok: true,
            message: "Successfully registered",
            data: user
        })
    }
    catch(e) {
        res.status(400).json({
            ok: false,
            message: e + ""
        })
    }
}