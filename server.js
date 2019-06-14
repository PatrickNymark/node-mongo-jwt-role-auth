const express = require('express');
const mongoose = require('mongoose')
const errorHandler = require('./helpers/error-handler');


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

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// global error handler
app.use(errorHandler);

// api routes
app.use('/api/users', require('./controllers/user.controller'));
app.use('/api/auth', require('./controllers/auth.controller'))

// start server
const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server running on ${port}`))

