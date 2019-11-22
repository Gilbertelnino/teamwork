const jwt = require('jsonwebtoken');


const verifyToken = (req,res,next) =>{
    const token = req.header('Authorization');
    if(!token) {
        return res.status(403).send('Forbidden');
    }
    try{
       const verified = jwt.verify(token, 'hello');
       req.user = verified;
       next();
    } catch (err) {
        res.status(400).json({
            message: "invalid token"
        })
    }
};
module.exports = verifyToken;