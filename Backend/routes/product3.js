const express = require('express');
const router = express.Router();
const product3 = require('../models/product3');

router.get('/name', (req, res) => {
    res.send("Hello Chowmein3!");
});

router.get('/save', (req, res) => {
    const product31 = new product3({
        title : "Snacks",
        food : [
            {
                tag : ["Light","Cheap"],
                name : "Paneer Pakoda",
                price : 5,            
            },
            {
                tag : ["Light","Cheap"],
                name : "Paneer Pakoda",
                price : 5, 
            },
            {
                tag : ["Light","Cheap"],
                name : "Paneer Pakoda",
                price : 5, 
            },
            
        ],
    });
    product31.save()
        .then((result) => {
            res.send(result);
            console.log("Successful");
        })
        .catch((error) => {
            console.log(error);
        })
})

module.exports = router;