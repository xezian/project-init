const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3030;

const app = express();
const models = require("./models");

// Import routes and give the server access to them.
const routes = require("./controllers/project-routes.js");
app.use(routes);

models.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});