
function deepEqual(obj1, obj2) {
	if (typeof(obj1) !== typeof(obj2)) {
		return (false);
	}
	
	for (var key in obj1) {
		//console.log(key);
		if ((obj2 === null) || 
			//(obj1.key !== obj2.key) ||
		    (!obj2.hasOwnProperty(key))) {
			return (false);
		}
		
		if ((obj1[key] !== null) && (typeof obj1[key] === "object")) {
			return (deepEqual(obj1[key], obj2[key]));
		}
	}

	return (true);
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, null));
// → false
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

