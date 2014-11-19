

function Vector(x, y) {
	this.x = x;
	this.y = y;
	this.len = Math.sqrt(this.x * this.x + this.y * this.y);
}

Vector.prototype.plus = function (v2) {
    return (new Vector(this.x + v2.x, this.y + v2.y));
};

Vector.prototype.minus = function (v2) {
    return (new Vector(this.x - v2.x, this.y - v2.y));
};

Object.defineProperty(Vector.prototype, "length",
	{enumerable: true, 
		
		get: function () {
			return(this.len);
		},
		
		set: function (val) {
			this.len = val;
			return (this.len);
		}
	});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
var foo = new Vector(3,4);
foo.length = 0;
console.log(foo.length);
// -> 0