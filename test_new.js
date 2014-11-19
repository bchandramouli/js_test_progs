function Vector(x, y) {
	this.x = x;
	this.y = y;
	//this.length = Math.sqrt(this.x * this.x + this.y * this.y);
}

var a = new Vector(1, 2);

console.log(a.x, a.y);