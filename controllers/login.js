const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcrypt'),
    db = require('../models')

module.exports = function(app) {
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy(function(username, password, done) {
        db.User.findOne({
            where: {
            'username': username
            }
        }).then(function (user) {
            console.log(user.dataValues.salt);
            if (user == null) {
                console.log("user == null");
                return done(null, false, { message: 'Incorrect credentials.' })
            }
            console.log(password);
            console.log(user);
            const hashedPassword = bcrypt.hashSync(password, user.dataValues.salt);
            console.log(hashedPassword);
            console.log(user.dataValues.password);
            if (user.dataValues.password === hashedPassword) {
                console.log("user.password === hashedPassword (success?)");
                return done(null, user)
            }
            return done(null, false, { message: 'Incorrect credentials.' })
        })
        }
    ))

    passport.serializeUser(function(user, done) {
        done(null, user.id)
    })

    passport.deserializeUser(function(id, done) {
        db.User.findOne({
        where: {
            'id': id
        }
        }).then(function (user) {
        if (user == null) {
            done(new Error('Wrong user id.'))
        }
        
        done(null, user)
        })
    })
};