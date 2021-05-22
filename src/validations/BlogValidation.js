const Joi = require('joi')

module.exports =  Joi.object({
    title: Joi.string()
			.min(2)
            .max(512)
            .required(),
    body: Joi.string()
        .min(1)
        .max(5020)
        .required(),
    media_id: Joi.string(),
})