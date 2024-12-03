/*Instructions
Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

All the arguments except the last will be arrays, the last argument is n.

nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value

 */

//Solution
function nthSmallest(...arrays) {
	let n = arrays.pop()
	return [].concat(...arrays).flat().sort((a, b) => a > b ? 1 : -1)[n - 1];
}

