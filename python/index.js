const wappalyzer = require('wappalyzer');
var fs = require('fs');
 
wappalyzer.run(['https://www.w3schools.com/html/', '--quiet'], function(stdout, stderr) {
    if ( stdout ) {
		
		 var fs = require('fs');
		fs.writeFile("/tmp/test", stdout, function(err) {
			
		if(err) {
			return console.log(err);
		}
    });
	
	// console.log(stdout)
    }
 
    if ( stderr ) {
        process.stderr.write(stderr);
    }
});