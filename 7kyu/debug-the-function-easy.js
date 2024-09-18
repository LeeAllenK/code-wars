/*Instructions
Debug the functions
Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)
 */

//Solution
function multi(arr) {
	return arr.reduce((acc, cVal) => acc * cVal);
}
function add(arr) {
	return arr.reduce((acc, cVal) => acc + cVal, 0);
}
function reverse(str) {
	return str.split('').reverse().join('');
}