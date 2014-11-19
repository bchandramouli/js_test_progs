#!/usr/bin/env node

function longest(str) {
	var warr = str.split(" ");
    var n = warr.length;
    var mlen = 0;
    var lword = "";

    for (var i = 0; i < n; i++) {
        if (warr[i].length > mlen) {
        	mlen = warr[i].length;
        	lword = warr[i];
        }
    }
    console.log(lword);
    console.log(mlen);
}

longest("This is very strange"); // → strange
