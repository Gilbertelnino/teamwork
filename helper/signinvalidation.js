const Joi = require('@hapi/joi');
const signinVal = (signin) =>{
    const schema = Joi.object({
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().required()
    });
    return schema.validate(signin);
}
module.exports = signinVal;