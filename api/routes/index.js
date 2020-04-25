const router = require('express').Router();
const csvController = require('../controllers/generateCsv')

router.get('/', (req, res) => {
    res.send('This is the index route');
});

router.get('/generate-csv', csvController.generateCsv)

module.exports = router;