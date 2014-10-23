#!/usr/local/bin/node

function set_min(hist, min_len) {
	if ((hist !== "") && (hist.length < min_len)) {
	    return hist;
	}
	return "";
}

function find_pattern(target) {
	var depth = 0;
	function find_history(start, history) {
		depth++;
		// Terminate condition 1.
		if (start == target) {
     		return history;
		// Terminate condition 2.1
		} else if (start > target) {
			return "";
		} else {
			var min = Infinity;
			var minhist = "";

            // Terminate condition 2.2
            /*
			if (depth > 20) {
				return (minhist);
			}
			*/

			var a = find_history(start + 5, "(" + history + " + 5)");
			minhist = set_min(a, min);
			if (minhist != "")
			    min = minhist.length;

			var b = find_history(start * 3, "(" + history + " * 3)");
			minhist = set_min(b, min) || minhist;
			if (minhist !== "")
			    min = minhist.length;	
/*
			var c = find_history(start - 7, "(" + history + " - 7)");
			minhist = set_min(c, min) || minhist;
			if (minhist !== "") 
			    min = minhist.length;
*/
			//console.log(minhist);
			return (minhist);
		}
	}
	return find_history(1, "1");
}

console.log(find_pattern(13));

var obj1 = {val: 10};
var obj2 = obj1;
obj2.val = 2000;
console.log(global);