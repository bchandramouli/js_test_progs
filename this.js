// test code

function FindNum() {
	console.log("Empty constructor");
}

FindNum.prototype.findEle = function fNum(arr, num) {
	    if (arr.some(function fEle(ele) {
		    if (ele === num) {
			    return true;
		    }
		})) {
		    console.log(this);
	        return this.true_val;
	    }
	    console.log(this);
	    return this.false_val;
    }



var checkPresent = new Object(FindNum.prototype);

//console.log(checkPresent.__proto__);

console.log(checkPresent.findEle.apply(checkPresent, [[1,2,3], 3]));