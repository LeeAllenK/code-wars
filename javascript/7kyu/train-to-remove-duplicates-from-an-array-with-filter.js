/*Instructions
In this kata your task is to remove all the duplicates from the array using a standart build-in method - Array.prototype.filter(); return the array containing unique values only.

Tip: use the index of value(s) to solve this kata

If you are not familiar with filter() - info is here:


For example:

var arr = [4];

unique(arr); // should return [4]

var arr = [1,1,1,2,2,3];

unique(arr); // should return [1,2,3]

ArraysFundamentals
 */

//Solution
function unique(arr) {

	let filter = arr.filter((a, i) => arr.indexOf(a) === i);
	return filter;
}