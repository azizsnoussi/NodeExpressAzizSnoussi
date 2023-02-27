const express = require('express');
const createError = require('http-errors');
const mongoose = require('mongoose');

const dbConfig = require('./config/mongodb.json');

const studentsRouter = require('./routes/students');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'twig');

app.use('/students', studentsRouter);


app.use((req, res, next) => {
    next(createError(404));
});

mongoose.connect(dbConfig.mongo.uri, {useNewUrlParser: true, useUnifiedTopology: true},()=>console.log("Connected to DB 🚀"));

module.exports = app;