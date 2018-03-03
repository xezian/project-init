// Require all models
var db = require("../models");

// Set up api routes
module.exports = function(app) {

  // ============================================== //
  // ========== GET ROUTES FOR COMMENTS =========== //
  // ============================================== //

  // Get all comments
  app.get("/api/comments/", function(req, res) {
    db.Comment.findAll({})
    .then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // Get all comments of a specific user
  app.get("/api/comments/:user_id", function(req, res) {
    db.Comment.findAll({
      where: {
        commentUserId: req.params.user_id
      }
    })
    .then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // Get all comments of a specific project
  app.get("/api/comments/:project_id", function(req, res) {
    db.Comment.findAll({
      where: {
        commentProjectId: req.params.project_id
      }
    })
    .then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // ============================================== //
  // ========== POST ROUTES FOR COMMENTS ========== //
  // ============================================== //

  // Create a new comment
  app.post("/api/comments", function(req, res) {
    db.Comment.create({
      text: req.body.text
    })
    .then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // ============================================== //
  // ================ DELETE ROUTES =============== //
  // ============================================== //

  // Delete a comment
  app.delete("/api/comments/:user_id", function(req, res) {
    db.Comment.destroy({
      where: {
        user_id: req.params.user_id
      }
    })
    .then(function(dbComment) {
      res.json(dbComment);
    }).catch(function(e) {
      console.warn(e);
    });
  });

  // ============================================== //
  // ================ UPDATE ROUTES =============== //
  // ============================================== //
  
  // Update a comment
  app.put("/api/comments/:comment_id", function(req, res) {
    db.Comment.update({
        text: req.body.text,
    }, {
        where: {
        comment_id: req.params.comment_id
        }
    })
    .then(function(dbComment) {
        res.json(dbComment);
    });
  });
};