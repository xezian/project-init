// bcrypt to encrypt the password
const bcrypt = require("bcrypt");
// Require all models
const db = require("../models");
// Export a function 
module.exports = function(app){
    // When a post request is made to api/users
    app.post("/api/users", function(req, res) {
        console.log("hello! create user route here");
        // First off, get the username password and email from the api
        const username = req.body.username.value;
        const email = req.body.email.value;
        const password = req.body.password.value;
        // Secondly, encrypt the password
        const salt = bcrypt.genSaltSync(10);
        console.log(salt);
        let hashedPassword = bcrypt.hashSync(password, salt);
        console.log(hashedPassword);
        // Thirdly, create a new user object for seqeulize
        const newUser = {
            username: username,
            email: email,
            salt: salt,
            password: hashedPassword
        };
        console.log(newUser);
        // Lastly, put a new user in the DB
        db.User.create(newUser)
        .then(function(dbUser) {
            res.json(dbUser);
        });
    });
}

