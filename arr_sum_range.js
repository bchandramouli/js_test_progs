// Your code here.
function range(start, end, step) {
	var arr = [];
	var step = step || 1;

	for (var i = start; (i * step) <= (end * step);  i += step) {
		//console.log(i);
		arr.push(i);
	}

	return (arr);
}

function sum(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return (sum);
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]