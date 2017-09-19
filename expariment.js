var yamlParse = require('yaml-js');
var fs = require('fs');
var util = require('util');

var sample;

fs.readFile("the.yaml", 'utf8', function(err,contents) {
	if( err ) throw err;
	sample = yamlParse.load(contents);

	console.log("the parsed object");
	console.log(util.inspect(sample,{showHidden:false,depth:null}));

	var ar = sample["top"].arr;
	var ob = sample["top"].obj;

	console.log(util.inspect(ar,{showHidden:false,depth:null}));
	console.log(util.inspect(ob,{showHidden:false,depth:null}));

	console.log("foreach() on array type");
	try {
		ar.forEach(function(f){console.log(f)});
	} catch(err) {
		console.log("=== error in foreach() array");
		console.log(err);
	}

	console.log("foreach() on object type");
	try {
		ob.forEach(function(o){console.log(o + ":" + ob[o])});
	} catch(err) {
		console.log("=== error in foreach() object");
		console.log(err);
	}
});