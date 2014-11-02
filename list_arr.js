function arrayToList(arr) {
	var list = null;

	while (arr.length) {
	    list = {value: arr.pop(), rest: list};
	 }

	 return (list);
}

function listToArray(list) {
	var arr = [];

    while (list) {
	    arr.push(list.value);
	    list = list.rest;
    }
		
	return (arr);
}

function prepend(num, list) {

	return ({value: num, rest: list});

}

function nth(list, pos) {

	if (!list) {
		return (undefined);
	}
	
	if (!pos) {
		return (list.value);
	}

	return (nth(list.rest, pos-1));
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
var foo = arrayToList([10, 20, 30]);
//console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(foo, 1));
console.log(foo);
// → 20