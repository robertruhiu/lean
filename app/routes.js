var User = require('./models/user');
var Frontend = require('./models/frontend');
var Backend = require('./models/backend');
var Fullstack = require('./models/fullstack');
var Devops = require('./models/devops');
var Android = require('./models/android');
var Ios = require('./models/ios');

var flash = require('connect-flash');
var Profile = require('./models/profile');

module.exports = function (app, passport) {



    app.get('/', function (req,res) {
        res.render('landing/home',{layout: 'homelayout'})

    });

    app.get('/login', function (req, res) {
        var messages = req.flash('error');
        res.render('users/signin', {layout: 'users',message: messages, hasErrors: messages.length >0 });
    });


    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/index',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.get('/signup', function (req, res) {
        var messages = req.flash('error');
        res.render('users/signup', {layout: 'users',message: messages, hasErrors: messages.length >0 });
    });
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    app.get('/profile', function (req, res) {
        var userId = req.params.id;
        var messages = req.flash('error');
        res.render('users/profile', {layout: 'users',message: messages, hasErrors: messages.length >0 ,userId:userId});
    });

    app.post('/profile' ,function (req,res) {

        var profile =new Profile({

            username:req.body.username,
            company:req.body.company,
            position:req.body.position
        });
        profile.save(function (err,result) {
            res.redirect('/index')
        })

    });









    app.get('/index',isLoggedIn ,function (req, res, next) {
        res.render('cto/index');
    });


    app.get('/custom',isLoggedIn , function (req, res, next) {
        res.render('cto/custom');
    });
    app.get('/requirements',isLoggedIn , function (req, res, next) {
        res.render('cto/require');
    });

    app.get('/invites',isLoggedIn , function (req, res, next) {
        res.render('cto/invites');
    });
    app.get('/invoice',isLoggedIn , function (req, res, next) {
        res.render('cto/payment');
    });



    app.get('/project',isLoggedIn , function (req, res, next) {
        res.render('cto/project');
    });

    app.get('/fullreport',isLoggedIn , function (req, res, next) {
        res.render('cto/fullreport' ,{layout: 'reportlayout'});
    });

    app.get('/candidate',isLoggedIn ,function (req, res, next) {
        res.render('candidate/candidate', {layout: 'candidatelayout'});
    });

    app.get('/details',isLoggedIn , function (req, res, next) {
        res.render('candidate/detailsproject', {layout: 'candidatelayout'});
    });

    app.get('/frontend', function (req, res) {
        Frontend.find({}, function (err, docs) {
            var projectChunks = [];
            var chunkSize = 2;
            for (var i = 0; i < docs.length; i += chunkSize) {
                projectChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('projects/frontend', {project: projectChunks});
        });
    });

    app.get('/backend', function (req, res) {
        Backend.find({}, function (err, docs) {
            var projectChunks = [];
            var chunkSize = 2;
            for (var i = 0; i < docs.length; i += chunkSize) {
                projectChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('projects/backend', {project: projectChunks});
        });
    });

    app.get('/fullstack', function (req, res) {
        Fullstack.find({}, function (err, docs) {
            var projectChunks = [];
            var chunkSize = 2;
            for (var i = 0; i < docs.length; i += chunkSize) {
                projectChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('projects/fullstack', {project: projectChunks});
        });
    });

    app.get('/devops', function (req, res) {
        Devops.find({}, function (err, docs) {
            var projectChunks = [];
            var chunkSize = 2;
            for (var i = 0; i < docs.length; i += chunkSize) {
                projectChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('projects/devops', {project: projectChunks});
        });
    });

    app.get('/android', function (req, res) {
        Android.find({}, function (err, docs) {
            var projectChunks = [];
            var chunkSize = 2;
            for (var i = 0; i < docs.length; i += chunkSize) {
                projectChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('projects/android', {project: projectChunks});
        });
    });
    app.get('/ios', function (req, res) {
        Ios.find({}, function (err, docs) {
            var projectChunks = [];
            var chunkSize = 2;
            for (var i = 0; i < docs.length; i += chunkSize) {
                projectChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('projects/ios', {project: projectChunks});
        });
    });







};
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}