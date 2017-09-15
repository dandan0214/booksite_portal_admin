var express = require('express');
var path = require('path');
var app = express();
var engines = require('consolidate');

// view engine setup
app.set('views', './views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', function(req, res){
    res.render('login');    
});

app.get('/:page', function(req, res){
    res.render(req.params.page);    
});

app.listen(4000);



