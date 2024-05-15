/*Instructions
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]
 */

//Solution

var uniqueInOrder = function (iterable) {
	//your code here - remember iterable can be a string or an array

	let array = String(iterable).split(',').join('').split('');

	if(array.length == 0) return [];

	return array.map((e, i, arr) => {



		if(Number(e)) return arr.map((e, i) => +e).filter((e, i, arr) => e !== arr[i - 1])

		if(e) return arr.filter((e, i) => e !== arr[i - 1])

	})[0];

}