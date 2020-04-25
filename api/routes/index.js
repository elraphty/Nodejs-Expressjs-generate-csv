/**
 * created by Raphael Osaze Eyerin
 * on 25th of April 2020
 * index.js This file is the route index file that houses the whole routes in this project
 */

const router = require('express').Router();
const csvController = require('../controllers/generateCsv')

router.get('/', (req, res) => {
    res.send('This is the index route');
});

router.get('/generate-csv', csvController.generateCsv)

module.exports = router;