const jwt = require('jsonwebtoken');
const express = require('express');
const Validation = require('../helper/validater');
const employee = require('../helper/employee')
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/',(req,res) => {
    bcrypt.hash(req.body.password, 10, (error,hash) =>{
        if(error) {
            return res.status(400).json({message: 'No password provided'});
        } else{
    const newEmployee = { 
                    id: employee.length + 1,
                    firstName: req.body.firstName,
                    lastName:req.body.lastName, 
                    email: req.body.email, 
                    password: hash, 
                    gender: req.body.gender, 
                    jobRole: req.body.jobRole, 
                    department: req.body.department, 
                    address: req.body.address
        };
    
    const{ error } = Validation(newEmployee);
    if(error){
        res.status(400).send(error.details[0].message)
    } else{
        employee.push(newEmployee);
        jwt.sign({newEmployee},'helloworld',(error,token) =>{
            res.status(201).json({
                status: 201,
                message: "User created successfull",
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