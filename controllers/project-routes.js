// Require all models
var db = require("../models");

// Set up api routes
module.exports = function(app) {

    // ============================================== //
    // ========== POST ROUTES FOR PROJECTS =========== //
    // ============================================== //

    // Create a new project
    app.post("/api/projects", function(req, res) {
	if (req.body.latitude === undefined) {
		req.body.latitude = 32.2217
	}    
	
	if (req.body.longitude === undefined) {
		req.body.longitude = -110.9265 
	}    
        db.Project.create({
            name: req.body.name,
            about: req.body.about,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            category: req.body.category,
            username: req.body.username,
            UserId: req.body.UserId
        }).then(function(dbProject) {
            res.json(dbProject);
        });
    });

    // ============================================== //
    // ========== GET ROUTES FOR PROJECTS =========== //
    // ============================================== //

    // Get all projects
    app.get("/api/projects/", function(req, res) {
        db.Project.findAll({})
            .then(function(dbProject) {
                res.json(dbProject);
        });
    });

    // Get all projects of a specific user
    app.get("/api/projects/:user_id", function(req, res) {
        db.Project.findAll({
            where: {
                user_id: req.params.user_id
            }
        }).then(function(dbProject) {
            res.json(dbProject);
        });
    });

    // Get all projects of a specific subject
    app.get("/api/projects/:about", function(req, res) {
        db.Project.findAll({
            where: {
            about: req.params.about
            }
        }).then(function(dbProject) {
            res.json(dbProject);
        });
    });

    // ============================================== //
    // ========= DELETE ROUTES FOR PROJECT ========== //
    // ============================================== //

    // Delete a project
    app.delete("/api/projects/:project_id", function(req, res) {
        db.Project.destroy({
            where: {
                project_id: req.params.project_id
            }
        }).then(function(dbProject) {
            res.json(dbProject);
        }).catch(function(e) {
            console.warn(e);
        });
    });

  // ============================================== //
  // ================ UPDATE ROUTES =============== //
  // ============================================== //

    // Update a project
  app.put("/api/projects", function(req, res) {
    db.Project.update(
        req.body,
        {
        where: {
            project_id: req.body.project_id
        }
    })
    .then(function(dbProject) {
      res.json(dbProject);
    });
  });
};
