const express = require('express')
const app = express()
const ErrorResponse = require("./utils/errorResponse");


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

app.use(express.json())
app.use(express.static('public'))

app.listen('3000',()=>{console.log('server is running')})

const api = require('./src/api')


//routing
app.use('/api/v1', api)

//error handle
app.use((err, req, res, next) => {
    let error = { ...err };
  
    error.message = err.message;
  
 
    console.log(error.message);
  
    res.status(error.statusCode || 500).json({
      error: true,
      message: error.message || "Server Error",
    });
  })







