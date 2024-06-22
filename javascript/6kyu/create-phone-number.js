/*Instructions
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
 */

//Solution
function createPhoneNumber(numbers) {

	let a = [];
	let b = [];
	let c = [];

	let sorted = numbers.sort((a, b) => a + b);

	for(let i = 0; i < sorted.length; i++) {
		if(i < 3) {
			a.push(sorted[i]);
		} else if(i > 2 && i < 6) {
			b.push(sorted[i]);
		} else {
			c.push(sorted[i]);
		}
	}
	let first = a.join('');
	let second = b.join('');
	let last = c.join('');

	return `(${first}) ${second}-${last}`;
}