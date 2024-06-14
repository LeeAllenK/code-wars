/*Instructions
Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings.
 */

//Solution
function dbSort(a) {

	const fruits = a.filter((e) => e === String(e)).sort((a, b) => a > b ? 1 : -1);
	const nums = a.filter((e) => e === +e).sort((a, b) => a < b ? -1 : 1);

	return nums.concat(fruits);
}