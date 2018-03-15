// declare initial dependancies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");
const flash = require("connect-flash");
const util = require("util");

// either - or
const PORT = process.env.PORT || 3030;

// 'app' does express-y stuff from here on
const app = express();
// all of the models in a directory with a guide to working with them called 'index.js' which sequelize CLI created for us (thanks!)
const models = require("./models");

// bodyParser is our band name
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// for production only! then the client/build directory has it all.
if( process.env.NODE_ENV === 'production' ){
  app.use(express.static('client/build'));
}
// requirements for express app to use passport
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'finish the entire project', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Import routes and give the server access to them.
const projectRoutes = require("./controllers/project-routes.js");
const userRoutes = require("./controllers/user-routes.js");
const commentRoutes = require("./controllers/comment-routes.js");
const login = require("./controllers/login.js");
const signup = require("./controllers/signup.js");

projectRoutes(app);
userRoutes(app);
commentRoutes(app);
login(app);
signup(app);

// for production only! where we serve the index.html through which our React code is delivered
if( process.env.NODE_ENV === 'production' ){
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
  });
}

// sequlize.sync up our models then connect to the server
models.sequelize.sync({ }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
