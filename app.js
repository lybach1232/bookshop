const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes.js");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books


mongoose
    .connect(
        `mongodb+srv://admin:123@bookshop.n3wfgga.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => console.log("Connected to Database"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));

