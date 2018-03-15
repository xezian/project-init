// bcrypt to encrypt the password
const bcrypt = require("bcrypt");
// Require all models
const db = require("../models");
// Export a function 
module.exports = function(app){
    // When a post request is made to api/users
    app.post("/api/users", function(req, res) {
        // First off, get the username password and email from the api
        const username = req.body.username.value;
        const email = req.body.email.value;
        const password = req.body.password.value;
        // Secondly, encrypt the password
        const salt = bcrypt.genSaltSync(10);
        let hashedPassword = bcrypt.hashSync(password, salt);
        // Thirdly, create a new user object for seqeulize
        const newUser = {
            username: username,
            email: email,
            salt: salt,
            password: hashedPassword
        };
        // Lastly, put a new user in the DB
        db.User.create(newUser)
        .then(function(dbUser) {
            res.json(dbUser);
        });
    });
}

