const express = require('express');
const articleVal = require('../helper/articleval');
const articleStrg = require('../helper/articleStrg');
const verifyToken = require('../helper/articleToken');
const router = express.Router();

router.post('/',verifyToken, (req,res) =>{
    const newArticle = {
        id: articleStrg.length + 1,
        title: req.body.title,
        article: req.body.article
    };
    const { error } = articleVal(newArticle);
    if(error){
        res.status(400).send(error.details[0].message);
    } else {
        articleStrg.push(newArticle);
        res.status(200).json({
            status: 200,
            message: "article successfully created",
            data:{
                createdOn : new Date(),
                title: req.body.title

            }
        });
    }
});

module.exports = router;