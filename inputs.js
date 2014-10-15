#!/usr/local/bin/node

var prompt = require('prompt');

prompt.start();

var property = {
	name: 'num',
	message: 'Enter a number',
	validator: Number,
	warning: 'Must be a number',
	default: 20
}

var foo= 200;

prompt.get(property, function(err, result) {
	if (err) { return 1; }
	console.log("Number is: " + result.num);
	foo = result.num;
});



