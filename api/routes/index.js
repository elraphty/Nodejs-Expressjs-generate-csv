const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('This is the index route');
});

module.exports = router;