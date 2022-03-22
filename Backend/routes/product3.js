const express = require('express');
const router = express.Router();
const product3 = require('../models/product3');

router.get('/name', (req, res) => {
    res.send("Hello Chowmein3!");
});

router.get('/save', (req, res) => {
    const product31 = new product3({
        title : "Dinner",
        food : [
            {
                tag : ["Heavy","Awesome"],
                name : "Paneer",
                price : 25, 
                imageurl : "random1",           
            },
            {
                tag : ["Heavy","Awesome"],
                name : "Paneer",
                price : 25, 
                imageurl : "random2",
            },
            {
                tag : ["Heavy","Awesome"],
                name : "Paneer",
                price : 25, 
                imageurl : "random3",
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