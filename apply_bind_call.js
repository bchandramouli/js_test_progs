/*
 * .call() - calls the same function with the specified arguments
 *
 * .apply() - calls the same function with the arguments specified in an array
 *
 * .bind() - creates a new function with the same function body, 
 *           with a preset value of this (the first argument) and 
 *           returns that function.
 *
 * In all cases, the first argument is used as the value of this inside 
 * the function.
 */


function transparentWrapping(f) {
  return function() {
    return f.apply(null, arguments);
  };
}

var theSet = ["Carel Haverbeke", "Maria van Brussel",
              "Donald Duck"];
function isInSet(set, person) {
  return set.indexOf(person.name) > -1;
}

console.log(ancestry.filter(function(person) {
  return isInSet(theSet, person);
}));
// → [{name: "Maria van Brussel", …},
//    {name: "Carel Haverbeke", …}]
console.log(ancestry.filter(isInSet.bind(null, theSet)));
// → … same result

speak.apply(fatRabbit, ["Burp!"]);
// → The fat rabbit says 'Burp!'
speak.call({type: "old"}, "Oh my.");
// → The old rabbit says 'Oh my.'

