var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var mongo = require('mongodb');
var assert = require('assert');
var expressHbs = require('express-handlebars');
var path = require('path');
var MongoStore = require('connect-mongo')(session);


require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
app.use(session({
    secret: '#tag#icui4cu#',
    saveUninitialized: true,
    resave: false,
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    cookie: {maxAge: 100 * 60 * 1000}
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
app.use(express.static(path.join(__dirname, 'public')));

//Create public directory for views
app.engine('.hbs',expressHbs({defaultLayout:'layout',extname: '.hbs'}));
app.set('view engine','.hbs');
app.use(express.static('public'));
app.use(function (req, res, next) {
    res.locals.login = req.isAuthenticated();

    res.locals.session = req.session;
    next();

});


// app.use('/', function(req, res){
// // 	res.send('Our First Express program!');
// 	console.log(req.cookies);
// // 	console.log('================');
// 	console.log(req.session);
//  });

require('./app/routes.js')(app, passport);

app.listen(process.env.PORT || 4000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});





