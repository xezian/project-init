const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcrypt'),
    db = require('../models')

// defines our local strategy for passport
module.exports = function(app) {
    passport.use(new LocalStrategy(function(username, password, done) {
        // look for user by username
        db.User.findOne({
            where: {
            'username': username
            }
        }).then(function (user) {
            // does not exist
            if (user == null) {
                console.log("user == null");
                return done(null, false, { message: 'Incorrect credentials.' })
            };
            // so if the user exists, we check the password
            // first hash the password the user submits with bcrypt and the hash from the user table in the db
            const hashedPassword = bcrypt.hashSync(password, user.dataValues.salt);
            // now match it against the user's stored hashed password from the db
            if (user.dataValues.password === hashedPassword) {
                // here is the successful login path, returning done(null, user)
                console.log("user.password === hashedPassword (success?)");
                return done(null, user)
            }
            // otherwise the password must have been wrong
            return done(null, false, { message: 'Incorrect credentials.' })
        })
        }
    ))
    // this part handles passport user serialization and deserialization
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