const Joi = require('@hapi/joi');
const articleVal = (article) =>{
    const schema = Joi.object({
        id: Joi.required(),
        title: Joi.string().required(),
        article: Joi.string().required()
    });
    return schema.validate(article);
}
module.exports = articleVal;