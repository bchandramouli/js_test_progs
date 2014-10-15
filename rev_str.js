#!/usr/local/bin/node

function revStr(str) {
	var rstr = "";

    var n = str.length;

	for (var i=0; i < n; i++) {
		rstr += str[n-i-1];
	}

	return (rstr);
}

var str="iluomardnahc";


console.log(revStr(str));
