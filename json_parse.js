var ANCESTRY_FILE = require('./ancestry.js')

var ancestry = JSON.parse(ANCESTRY_FILE);
//console.log(ancestry);


function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function age(p) { return p.died - p.born; }
function age_diff(p1, p2) { return p2.born - p1.born; }

function map_mom_ages(arr, p) {
	arr.push(age_diff(byName[p.mother], p));
	return (arr);
}

function validate_mom(p) { return (byName[p.mother]); }

// Average difference in age of mothers and children
console.log(average(ancestry.filter(validate_mom).reduce(map_mom_ages, [])));
// → 31.2


function map_life_expectancy(map, p) {

	var century = Math.ceil(p.died / 100);
	
	map[century] = map[century] || [];	
	map[century].push(age(p));
	
	return(map);
}

var century_map = ancestry.reduce(map_life_expectancy, {});

for (var cent in century_map) {
      console.log(cent,":",average(century_map[cent]));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

