const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const omdbRouter = require('./routes/omdb');

const app = express();

// These will not send a response
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// These can send a response or pass it on
// Based on url you can do one of two things
// 1. Return a file
// 2. Execute a function and return a response
app.use(express.static(path.join(__dirname, 'public')));
app.use('/omdb', omdbRouter);

module.exports = app;