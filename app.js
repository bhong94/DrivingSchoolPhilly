
var express = require('express');
var bodyParser = require('body-parser');
// ..Require controllers here..

var app = express();        // initiate express app

// body parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

// establish connection

// Set the template engine (PUG)
app.set('view engine', 'pug');

// set static files (the ./ means 'root' foler)
app.use(express.static('./assets'));

// render the homepage
app.get('/', function(req, res){
    res.render('index');
});

app.get('/home', function(req, res){
    res.render('index');
});

// render registration page
// app.get('/register', function(req, res){
//     res.render('register');
// });

//render login page
// app.get('/login', function(req, res){
//     res.render('login');
// });

// establish port number
app.listen(3000);
console.log("Connected to drivingschoolphiladelphia.com");
