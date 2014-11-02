
// An array-like object: note the non-negative integers used as keys​
var anArrayLikeObj = {0:"Martin", 1:78, 2:67, 3:["Letta", "Marieta", "Pauline"], length: 4};

// Make a quick copy and save the results in a real array:​
// First parameter sets the "this" value​


var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);
console.log(newArray); // ["Martin", 78, 67, Array[3]]​

Array.prototype.indexOf = function() {
	return (0);
};

// Search for "Martin" in the array-like object​
console.log(Array.prototype.indexOf.call (anArrayLikeObj, "Martin") === -1 ? false : true); // true​