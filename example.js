#!/usr/local/bin/node

function example() {
  var o = {}, i = 0;
  for (i = 0; i < 3; i++) {
    o[i] = function() { console.log(i); };
  }
  i = 10;
  
  o[0]();
  o[1]();
  o[2]();
}

example();

function example() {
  console.log(a);
  var a = 1;
}

example();