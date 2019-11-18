const express = require('express');
const allArticle = require('../helper/articleStrg');
const verifyToken = require('../helper/articleToken');
const router = express.Router();

router.get('/api/v1/feeds',verifyToken, (req,res) =>{
    res.status(200).json({
        status: "success",
        data: allArticle
    });
});
module.exports = router;