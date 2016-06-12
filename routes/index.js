var express = require('express');
var router = express.Router();
var path = require('path'); // built-in module

/* GET home page. */
router.get('/', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
    //sendFile은 매개변수는 항상 절대경로여야 한다
});

module.exports = router;