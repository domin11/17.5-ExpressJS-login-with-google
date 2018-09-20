var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
    res.render('login');
});

app.get('/auth/google', function(req, res){
    res.render('main-page', {
      login: req.query.login,
      password: req.query.password
    });
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('ExpressJS Pug Engine nasłuchuje na http://' + host + ':' + port);
});

app.use(function (req, res, next) {
    res.status(404).send('Coś poszło nie tak!')
});
