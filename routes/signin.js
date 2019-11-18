const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const validation = require('../helper/signinvalidation');
const employee = require('../helper/employee')
const router = express.Router();

router.post('/',(req,res)=>{
    bcrypt.hash(req.body.password, 10, (error,hash)=>{
        if(error){
            return res.status(400).json({
                error
            });
        } else{
    const currentEmployee = { 
            email: req.body.email, 
            password: hash
     };
    const { error } = validation(currentEmployee);
    if(error){
        res.status(400).send(error.details[0].message)
    } else{
        employee.push(currentEmployee);
        jwt.sign({ currentEmployee }, 'hello', (error, token) => {
            res.header('auth-token',token).status(200).json({
                status: 200,
                message: "User is successfully logged in",
                data: {
                    token
                }
            })
        });
    }
  }
 });
});
module.exports = router;