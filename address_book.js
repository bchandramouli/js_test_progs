function addEntry(fn, ln, phone, email) {
	this.firstName = fn;
	this.lastName = ln;
	this.phoneNumber = phone;
	this.email = email;
}

var bob = new addEntry("Bob", "Jones", "(650) 777-7777", "bob.jones@example.com");

var mary = new addEntry("Mary", "Johnson", "(650) 888-8888", "mary.johnson@example.com");
    
var contacts = [bob, mary];

console.log(contacts);

