const Joi = require('@hapi/joi');
const validation = (valid) =>{
    const schema = Joi.object({
        id: Joi.number(),
        firstName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        lastName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        password: Joi.string().required(),
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        gender: Joi.string(),
        jobRole: Joi.string(),
        department: Joi.string(),
        address: Joi.string()
    });
    return schema.validate(valid);
}
module.exports = validation;