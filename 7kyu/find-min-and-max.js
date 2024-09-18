/*Instructions
Implement a function that returns the minimal and the maximal value of a list (in this order).
 */

//Solution
function getMinMax(arr) {
	const minMax = [];

	const min = Math.min(...arr);
	const max = Math.max(...arr);
	minMax.push(min, max);
	return minMax;
}