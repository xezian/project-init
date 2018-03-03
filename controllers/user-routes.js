// Require all models
var db = require("../models");

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
  // ============ POST ROUTES FOR USERS =========== //
  // ============================================== //

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profile_img: req.body.profile_img,
      about_me: req.body.about_me
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
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