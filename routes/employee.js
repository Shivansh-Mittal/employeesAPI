const express = require('express');
const connection = require('../connection');
const router = express.Router();

require('dotenv').config();

router.get('/get',(req,res)=>{
    var query = "select EmployeeId,EmployeeName,Department,DateOfJoining,PhotoFileName from Employee";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

module.exports = router;