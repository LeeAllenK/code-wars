/*Instructions

Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14
 */

//Solution
function getSumOfDigits(integer) {
	let sum = 0;
	let digits = Math.floor(integer).toString();
	for(let ix = 0; ix < digits.length; ix++) {
		sum += +digits[ix];
	}
	return sum;
}