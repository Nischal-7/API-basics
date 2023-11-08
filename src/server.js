require("dotenv").config();

const express = require("express");
const app = express();

app.get("/hello", (req, res) => res.send("Hello, Node!!!"));

app.listen(process.env.PORT, () => {
    console.log(`Hey! The server is running at localhost:${process.env.PORT}`);
});
