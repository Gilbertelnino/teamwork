const express = require('express');
const articles = require('../helper/articleStrg');
const router = express.Router();
const verifyToken = require('../helper/articleToken');

router.delete('/api/v1/articles/:id',verifyToken, (req,res) =>{
    const foundArticle = articles.find(article => article.id === parseInt(req.params.id));
    if(!foundArticle){
        res.status(404).json({
            message: "Article of give ID not found"
        });
    } else{
        const index = articles.indexOf(foundArticle);
        articles.splice(index,1);
        res.status(200).json({
            message:"article successfully deleted"
        });
    }
});
module.exports = router;