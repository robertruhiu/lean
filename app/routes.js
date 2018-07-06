var User = require('./models/user');
var Frontend = require('./models/frontend');
var Backend = require('./models/backend');
var Fullstack = require('./models/fullstack');
var Devops = require('./models/devops');
var Cart = require('../app/models/cart');
var Project = require('../app/models/project');
var flash = require('connect-flash');
var Profile = require('./models/profile');
var Candidate = require('./models/candidate');


module.exports = function (app, passport) {


    app.get('/', function (req, res) {
        res.render('landing/home', {layout: 'homelayout'})

    });

    app.get('/login', function (req, res) {
        var messages = req.flash('error');
        res.render('users/signin', {layout: 'users', message: messages, hasErrors: messages.length > 0});
    });
    app.post('/login', passport.authenticate('userlogin', {
        successRedirect: '/index',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.get('/dev', function (req, res) {
        var messages = req.flash('error');
        res.render('users/candidatelogin', {layout: 'users', message: messages, hasErrors: messages.length > 0});
    });
    app.post('/dev', passport.authenticate('candidatelogin', {
        successRedirect: '/candidate',
        failureRedirect: '/logincandidate',
        failureFlash: true
    }));


    app.get('/signup', function (req, res) {
        var messages = req.flash('error');
        res.render('users/signup', {layout: 'users', message: messages, hasErrors: messages.length > 0});
    });
    app.post('/signup', passport.authenticate('userlocal', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    app.get('/candidatesignup', function (req, res) {
        var messages = req.flash('error');
        res.render('users/candidatesignup', {layout: 'users', message: messages, hasErrors: messages.length > 0});
    });
    app.post('/candidatesignup', passport.authenticate('candidatelocal', {
        successRedirect: '/',
        failureRedirect: '/candidatesignup',
        failureFlash: true
    }));


    app.get('/profile', function (req, res) {

        var username = req.user;
        var messages = req.flash('error');
        res.render('users/profile', {
            layout: 'users',
            username: username,
            message: messages,
            hasErrors: messages.length > 0
        });
    });
    app.post('/profile', function (req, res) {

        var username = req.user;
        var profile = new Profile({
            user: username,
            username: req.body.username,
            company: req.body.company,
            position: req.body.position

        });
        profile.save(function (err, result) {
            res.redirect('/index')
        })

    });


    app.get('/pricing', function (req, res) {

        res.render('landing/pricing', {layout: 'homelayout'});
    });

    app.get('/index', isLoggedIn, function (req, res) {
        var username = req.user;
        Project.find({user: req.user}, function (err, projects) {
            if (err) {
                return res.write('Error');
            }
            var cart;
            projects.forEach(function (project) {
                cart = new Cart(project.cart);
                project.items = cart.generateArray();

            });
            res.render('cto/index', {username: username, projects: projects});


        });


    });

    app.get('/project', isLoggedIn, function (req, res, next) {
        var username = req.user;

        res.render('cto/project', {username: username});
    });

    app.get('/fullreport', isLoggedIn, function (req, res, next) {


        res.render('cto/fullreport', {layout: 'reportlayout'});
    });
    app.get('/report', function (req, res, next) {


        res.render('cto/report', {layout: 'reportlayout'});
    });

    //candidates routes
    app.get('/candidate', function (req, res, next) {
        var username = req.user;

        res.render('candidate/candidate', {layout: 'candidatelayout', username: username});
    });

    app.get('/details', function (req, res, next) {
        var username = req.user;

        res.render('candidate/detailsproject', {layout: 'candidatelayout', username: username});
    });

    // content rendering and fetching of projects

    app.get('/frontend', isLoggedIn, function (req, res) {
        var username = req.user;
        Frontend.find({}, function (err, docs) {
            var projectChunks = [];
            var chunkSize = 2;
            for (var i = 0; i < docs.length; i += chunkSize) {
                projectChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('projects/frontend', {project: projectChunks, username: username});
        });
    });
    app.get('/frontend/add-to-cart/:id', isLoggedIn, function (req, res) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        Frontend.findById(productId, function (err, product) {
            if (err) {
                return res.redirect('/frontend');
            }
            cart.add(product, product.id);
            req.session.cart = cart;


            res.redirect('/custom');
        });

    });


    app.get('/backend', isLoggedIn, function (req, res) {
        var username = req.user;
        Backend.find({}, function (err, docs) {
            var projectChunks = [];
            var chunkSize = 2;
            for (var i = 0; i < docs.length; i += chunkSize) {
                projectChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('projects/backend', {project: projectChunks, username: username});
        });
    });
    app.get('/backend/add-to-cart/:id', isLoggedIn, function (req, res) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        Backend.findById(productId, function (err, product) {
            if (err) {
                return res.redirect('/backend');
            }
            cart.add(product, product.id);
            req.session.cart = cart;


            res.redirect('/custom');
        });

    });


    app.get('/fullstack', isLoggedIn, function (req, res) {
        var username = req.user;
        Fullstack.find({}, function (err, docs) {
            var projectChunks = [];
            var chunkSize = 2;
            for (var i = 0; i < docs.length; i += chunkSize) {
                projectChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('projects/fullstack', {project: projectChunks, username: username});
        });
    });
    app.get('/fullstack/add-to-cart/:id', isLoggedIn, function (req, res) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        Fullstack.findById(productId, function (err, product) {
            if (err) {
                return res.redirect('/fullstack');
            }
            cart.add(product, product.id);
            req.session.cart = cart;


            res.redirect('/custom');
        });

    });


    app.get('/devops', isLoggedIn, function (req, res) {
        var username = req.user;
        Devops.find({}, function (err, docs) {
            var projectChunks = [];
            var chunkSize = 2;
            for (var i = 0; i < docs.length; i += chunkSize) {
                projectChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('projects/devops', {project: projectChunks, username: username});
        });
    });
    app.get('/devops/add-to-cart/:id', isLoggedIn, function (req, res) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        Devops.findById(productId, function (err, product) {
            if (err) {
                return res.redirect('/devops');
            }
            cart.add(product, product.id);
            req.session.cart = cart;


            res.redirect('/customdevops');
        });

    });


    // acted after project selected
    app.get('/customdevops', isLoggedIn, function (req, res) {
        var username = req.user;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        if (!req.session.cart) {
            res.render('cto/index', {products: null});
        }

        var cart = new Cart(req.session.cart);

        console.log(cart);

        res.render('cto/customdevops', {products: cart.generateArray(), username: username});
    });
    app.get('/custom', isLoggedIn, function (req, res) {
        var username = req.user;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        if (!req.session.cart) {
            res.render('cto/index', {products: null});
        }

        var cart = new Cart(req.session.cart);

        console.log(cart);

        res.render('cto/custom', {products: cart.generateArray(), username: username});
    });


    app.get('/requirements', isLoggedIn, function (req, res, next) {
        var username = req.user;
        if (!req.session.cart) {
            res.render('cto/index', {products: null});
        }
        var cart = new Cart(req.session.cart);
        res.render('cto/require', {products: cart.generateArray(), username: username});
    });

    app.get('/invites', isLoggedIn, function (req, res, next) {
        var username = req.user;
        if (!req.session.cart) {
            res.render('cto/index', {products: null});
        }


        res.render('cto/invites', {username: username});
    });


    app.get('/invoice', isLoggedIn, function (req, res, next) {
        var username = req.user;

        res.render('cto/payment', {username: username});
    });
    app.post('/invoice', isLoggedIn, function (req, res) {

        var name = req.user;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        var project = new Project({
            user: name,
            cart: cart


        });
        project.save(function (err, result) {
            req.session.cart = null;
            res.redirect('/index')

        })


    });

    // ide entry
    app.get('/idesignup', function (req, res) {
        var messages = req.flash('error');
        res.render('users/idesignup', {layout: 'users', message: messages, hasErrors: messages.length > 0});
    });
    app.post('/idesignup', passport.authenticate('idelocal', {
        successRedirect: '/',
        failureRedirect: '/idesignup',
        failureFlash: true
    }));

    app.get('/idelogin', function (req, res) {
        var messages = req.flash('error');
        res.render('users/idelogin', {layout: 'users', message: messages, hasErrors: messages.length > 0});
    });
    app.post('/idelogin', passport.authenticate('idelogin', {
        successRedirect: 'http://128.199.37.244:8080/dashboard/#/ide/che/java-test',
        failureRedirect: '/idelogin',
        failureFlash: true
    }));


};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

function CandidateisLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/logincandidate');
}