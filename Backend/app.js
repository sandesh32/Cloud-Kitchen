const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

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

app.get("/", (req, res) => {
    res.send("HELLO Kapil");
});