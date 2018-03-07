const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");

const PORT = process.env.PORT || 3030;

const app = express();
const models = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if( process.env.NODE_ENV === 'production' ){
  app.use(express.static('client/build'));
};

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

// requirements for express app to use passport
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

if( process.env.NODE_ENV === 'production' ){
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
  });
}

models.sequelize.sync({ }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});