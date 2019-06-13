const express = require('express');
const mongoose = require('mongoose')
//const jwt = require('_helpers/jwt');
//const errorHandler = require('_helpers/error-handler');

const app = express();

// .env config
require('dotenv').config();

// database config
mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true
  })
  .then(res => console.log('Database connected'))
  .catch(err => console.log(err));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use JWT auth to secure the api
//app.use(jwt());

// api routes
//app.use('/users', require('./users/users.controller'));

// global error handler
//app.use(errorHandler);

// start server
const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server running on ${port}`))

