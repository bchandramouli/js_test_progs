/*
exports.area = function (num) {
	return (num * num);
};
*/

module.exports = function (num) {
	return ({ 
		area: function() {
			return (num * num);
		}
	});
}