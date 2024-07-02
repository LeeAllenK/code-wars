/*Instructions
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 */

//Solution
function findAverage(array) {

	return array.length === 0 ? 0 : array.reduce((acc, c, i, arr) => acc + c, 0) / array.length;
}