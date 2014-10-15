#!/usr/local/bin/node

function fac(n) {
  if (n == 0)
    return 1;
  else
    return fac(n - 1) * n;
}

console.log(fac(8)); // → 40320