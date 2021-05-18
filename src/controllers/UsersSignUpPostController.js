const { generateHash } = require('../modules/bcrypt');
const SignUpValidation = require('../validations/SignUpValidation')

module.exports = async (req, res) => {
    try {
        let { name, password } = await SignUpValidation.validateAsync(req.body)
        let user = await req.psql.users.create({
            name: name,
            password: await generateHash(password)
        })
        user = {
            id: user.id,
            name: user.name
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