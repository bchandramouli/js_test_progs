// Your code here.
function reverseArray(arr) {
  var revArr = [];
  
  while (arr.length) {
    revArr.push(arr.pop()); 
  }
  return (revArr);
}

function reverseArrayInPlace(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr.push(arr.shift());
	}
}

//console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]