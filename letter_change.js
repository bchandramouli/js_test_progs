#!/usr/local/bin/node

function LetterChanges(str) {

  var carr = str.split('');
  
  n = str.length;
  
  for (var i = 0; i < n; i++) {
    c = (carr[i].charCodeAt(0) + 1);
    carr[i] = String.fromCharCode(c);
  }

  str = carr.join("");

  // code goes here  
  return str;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(LetterChanges("hello"));