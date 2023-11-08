require('dotenv').config();

const StatusCodes = require('http-status-codes');
const express = require('express');
const app = express();

app.use(express.json());

const STATUS = {
  SUCCESS: 'OK',
  FAILURE: 'Bad Request'
}

app.get('/hello', (req, res) => {
  res.status(StatusCodes.CREATED), res.send('Hello, Node!!!');
});



app.post('/add', (req, res) => {
    const data = [];
  data.push(req.body);
  const {body} = req;

  if (!body.Name) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      status: STATUS.FAILURE,
      message: "Name is required",
    })
  }
  if (!body.Age) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      status: STATUS.FAILURE,
      message: "Age is required",
    })
  }

    return res.status(StatusCodes.CREATED).send({
      status: STATUS.SUCCESS,
      message: data[0],
    });
  
});



app.listen(process.env.PORT, () => {
  console.log(`Hey! The server is running at localhost:${process.env.PORT}`);
});
