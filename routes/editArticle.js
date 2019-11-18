const express = require('express');
const articleValidtion = require('../helper/articleval');
const articles = require('../helper/articleStrg');
const verifyToken = require('../helper/articleToken');
const router = express.Router();

router.patch('/api/v1/articles/:id',verifyToken, (req,res)=>{
    const found = articles.find(article => article.id === parseInt(req.params.id));
    const { error } = articleValidtion(found);
    if(!found){
        res.status(404).json({
            message:"article with given id not found"
        });
    } else if(error){
        res.status(400).send(error.details[0].message);
    } else{
        found.title = req.body.title;
        found.article = req.body.article;
        res.status(200).json({
            status: 200,
            message: "article successfully edited",
            data: {
                title: req.body.title,
                article: req.body.article
            }
        });
    }
});
module.exports = router;