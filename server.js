const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3030;

const app = express();
const models = require("./models");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if( process.env.NODE_ENV === 'production' ){
  app.use(express.static('client/build'));
};

// Import routes and give the server access to them.
const routes = require("./controllers/project-routes.js");
routes(app);


if( process.env.NODE_ENV === 'production' ){
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
  });
}

models.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});