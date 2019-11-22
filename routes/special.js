const express = require('express');
const articleStg = require('../helper/articleStrg');
const verifyToken = require('../helper/articleToken')
const router = express.Router();

router.get('/api/v1/articles/:id',verifyToken, (req,res) =>{
    const findArticle = articleStg.find(article => article.id === parseInt(req.params.id));
    if(!findArticle){
        res.status(404).json({
            message: "article with given ID not found"
        });
    } else{
        res.status(200).json({
            status: 200,
            data: findArticle
        });
    }
});
module.exports = router;