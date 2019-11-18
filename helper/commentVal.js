const Joi = require('@hapi/joi');
const commentValidation = (comment) =>{
    const schema = Joi.object({
        id: Joi.number(),
        comment: Joi.string()
    });
    return schema.validate(comment);
}
module.exports = commentValidation;