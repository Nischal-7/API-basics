require("dotenv").config();

const StatusCodes = require("http-status-codes");
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
    res.status(StatusCodes.CREATED),
    res.send("Hello, Node!!!");
});

app.listen(process.env.PORT, () => {
  console.log(`Hey! The server is running at localhost:${process.env.PORT}`);
});
