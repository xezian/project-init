// ============================================== //
// ========== POST ROUTES FOR PROJECTS =========== //
// ============================================== //

// Create a new project
app.post("/api/projects", function(req, res) {
    db.Project.create({
        name: req.body.name,
        about: req.body.about,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        project_img: req.body.project_img,
        creator_id: req.body.creator_id
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