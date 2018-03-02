var exec = require( "child_process" ).exec;

var child = exec( "npm start", {
	cwd: process.cwd() + "/client"
});

child.stdout.pipe( process.stdout );
child.stderr.pipe( process.stderr );