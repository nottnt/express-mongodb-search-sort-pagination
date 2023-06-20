require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Router = require("./routes")

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use(express.json());
app.use(Router);
app.listen(3001, () => {
    console.log("Server is running at port 3001");
});