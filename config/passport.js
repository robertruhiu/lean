var LocalStrategy = require('passport-local').Strategy;
var User = require('../app/models/user');


module.exports = function (passport) {


    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });


    passport.use('local-signup', new LocalStrategy({
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
        }));

    passport.use('local-login', new LocalStrategy({
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
};