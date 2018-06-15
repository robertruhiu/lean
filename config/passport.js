var LocalStrategy = require('passport-local').Strategy;
var User = require('../app/models/user');
var IdeUser = require('../app/models/ide');
var Candidate = require('../app/models/candidate');


module.exports = function (passport) {


    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('userlocal', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, email, password, done) {
            process.nextTick(function () {
                User.findOne({'local.username': email}, function (err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        return done(null, false,{message: 'Email already in use.'} );
                    } else {
                        var newUser = new User();
                        newUser.local.username = email;
                        newUser.local.password = newUser.generateHash(password);

                        newUser.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        })
                    }
                })

            });
        }
    ));

    passport.use('candidatelocal', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, email, password, done) {
            process.nextTick(function () {
                Candidate.findOne({'candidate.username': email}, function (err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        return done(null, false,{message: 'Email already in use.'} );
                    } else {
                        var newUser = new Candidate();
                        newUser.candidate.username = email;
                        newUser.candidate.password = newUser.generateHash(password);

                        newUser.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        })
                    }
                })

            });
        }
    ));

    passport.use('idelocal', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, email, password, done) {
            process.nextTick(function () {
                IdeUser.findOne({'ide.username': email}, function (err, ideuser) {
                    if (err)
                        return done(err);
                    if (ideuser) {
                        return done(null, false,{message: 'Email already in use.'} );
                    } else {
                        var newIdeUser = new IdeUser();
                        newIdeUser.ide.username = email;
                        newIdeUser.ide.password = newIdeUser.generateHash(password);

                        newIdeUser.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, newIdeUser);
                        })
                    }
                })

            });
        }
    ));

    passport.use('userlogin', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, email, password, done) {
            process.nextTick(function () {
                User.findOne({'local.username': email}, function (err, user) {
                    if (err) {
                        return done(err);
                    }
                    if (!user) {
                        return done(null, false,{message: 'No User found.'});
                    }
                    if (!user.validPassword(password)) {
                        return done(null, false,{message: 'invalid password'});
                    }
                    return done(null, user);

                });
            });
        }
    ));

    passport.use('idelogin', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, email, password, done) {
            process.nextTick(function () {
                IdeUser.findOne({'ide.username': email}, function (err, ideuser) {
                    if (err) {
                        return done(err);
                    }
                    if (!ideuser) {
                        return done(null, false,{message: 'No User found.'});
                    }
                    if (!ideuser.validPassword(password)) {
                        return done(null, false,{message: 'invalid password'});
                    }
                    return done(null, ideuser);

                });
            });
        }
    ));

    passport.use('candidatelogin', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, email, password, done) {
            process.nextTick(function () {
                Candidate.findOne({'candidate.username': email}, function (err, user) {
                    if (err) {
                        return done(err);
                    }
                    if (!user) {
                        return done(null, false,{message: 'No User found.'});
                    }
                    if (!user.validPassword(password)) {
                        return done(null, false,{message: 'invalid password'});
                    }
                    return done(null, user);

                });
            });
        }
    ));
};