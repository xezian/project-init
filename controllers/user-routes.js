// Require all models
var db = require("../models");
const passport = require('passport');

// Set up api routes
module.exports = function(app) {

  // ============================================== //
  // ============ GET ROUTES FOR USERS ============ //
  // ============================================== //

  // Get all users
  app.get("/api/users/", function(req, res) {
    db.User.findAll({})
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });
  // Get one user
  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // ============================================== //
  // ========== POST ROUTES FOR USERS============== //
  // ============================================== //

  app.post('/api/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
  });

  // ============================================== //
  // ========== DELETE ROUTES FOR USERS============ //
  // ============================================== //

  // Delete a user
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
            where: {
            id: req.params.id
            }
        })
        .then(function(dbUser) {
            res.json(dbUser);
        }).catch(function(e) {
            console.warn(e);
        });
    });

  // ============================================== //
  // =========== UPDATE ROUTE FOR USER ============ //
  // ============================================== //
  
  // Update a user
  app.put("/api/users", function(req, res) {
    db.User.update(
        req.body,
        {
        where: {
            user_id: req.body.user_id
        }
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });
};