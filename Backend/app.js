const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const product = require('./models/product');
const app = express();
const port = 5000;
const cors = require('cors');
const productModels = require('./models/product');

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const userRouter = require("./routes/user");
const productRouter = require("./routes/product");

const dbURI = 'mongodb+srv://cloud:cloud@cloudkitchen.afn38.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("Connected to the database!");
        app.listen(port);
    })
    .catch((err) => {
        console.log(err);
        console.log("Couldn't connect to the database");
    });

app.use("/users", userRouter);
app.use("/products", productRouter);

app.get("/products",(req,res) => {
    productModels.find({ })
    .then((data)=>{
        console.log('Data: ',data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error ');
    })
});

app.get('/', function(req, res) {
    res.send("WELCOME TO BACKEND");
    // product.find((err, docs) => {
    //     if (!err) {
    //         res.render("list", {
    //             data: docs
    //         });
    //     } else {
    //         console.log('Failed to retrieve the product List: ' + err);
    //     }
    // });
 
});