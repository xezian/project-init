var exec = require( "child_process" ).exec;

var parent = exec( "node server.js ");

parent.stdout.pipe( process.stdout );
parent.stderr.pipe( process.stderr );

var child = exec( "npm start", {
	cwd: process.cwd() + "/client"
});

child.stdout.pipe( process.stdout );
child.stderr.pipe( process.stderr );