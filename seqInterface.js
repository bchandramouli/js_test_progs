function objSeq (start, end) {
	this.curIndex = start;

	this.getNextIndex = function() {
		return (this.curIndex++);
	}

	this.eos = function () {
		if (this.curIndex < end) {
			return (false);
		}
		return (true);
	}

	this.reset = function () {
		this.curIndex = start;
	}
}

function RangeSeq (rngStart, rngEnd) {

	this.curIndex = rngStart;

	this.getNext = function() {
		return(this.curIndex++);
	};

	this.eos = function () {
		if (this.curIndex < rngEnd) {
			return (false);
		}
		return (true);
	};
}


function ArraySeq (arr) {
	
	this.curIndex = 0;

	this.getNext = function() {
		return(arr[this.curIndex++]);
	};

	this.eos = function () {
		if (this.curIndex < arr.length) {
			return (false);
		}
		return (true);
	};
};

function logFive(obj) {
	var i =1;
	while (i <= 5 && !obj.eos()) {
		console.log(obj.getNext());
		i++;
	}
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104