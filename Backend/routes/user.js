const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.get('/name', (req, res) => {
    res.send("Hello Chowmein!");
});

router.get('/save', (req, res) => {
    const user1 = new user({
        firstName: "Sandesh",
        lastName: "Dhungana",
        email: "sandeshdon@gmail.com",
        phone: "9846877693",
        password: "IamDon"
    });
    user1.save()
        .then((result) => {
            res.send(result);
            console.log("Successful");
        })
        .catch((error) => {
            console.log(error);
        })
})

module.exports = router;