#!/usr/local/bin/node

var length = 8;
var width = 8;

var outstr = "";

for(var i = 1; i <= length; i++) {
	outstr = "";
	if (i%2 == 0) {
		outstr += " ";
	}
	for (var j = 1; j <= width; j++) {
		outstr += "# ";
	}
	console.log(outstr);
}