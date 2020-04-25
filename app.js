/**
 * created by Raphael Osaze Eyerin
 * on 25th of April 2020
 * app.js This file is the app index file
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const routes = require('./api/routes');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// routes
app.use(routes);

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});