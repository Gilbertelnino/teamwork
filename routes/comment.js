const express = require('express');
const commentVal = require('../helper/commentVal');
const articles = require('../helper/articleStrg');
const verifyToken = require('../helper/articleToken');
const router = express.Router();

router.post('/api/v1/articles/:id/comments',verifyToken, (req,res) =>{
    const findArticle = articles.find(article => article.id === parseInt(req.params.id));
    const comment  = {
        id: articles.length + 1,
        comment: req.body.comment
    };
    const { error } = commentVal(comment);
    if(!findArticle) {
        res.status(404).json({
            message: "article of given id not found"
        });
    } else if(error){
        res.status(400).send(error.details[0].message);
    } else{
        articles.push(comment);
        res.status(201).json({
            message: "comment added successfully",
            data: {
                createdOn: new Date(),
                title: findArticle.title,
                article: findArticle.article,
                comment: req.body.comment,
            }
        });
    }
});
module.exports = router;