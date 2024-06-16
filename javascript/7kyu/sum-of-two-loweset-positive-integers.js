/*Instructions
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
 */

//Solution
function sumTwoSmallestNumbers(numbers) {
	//Code here
	let A = [];
	let B = [];
	let a;
	let b;
	for(let i = 0; i < numbers.length; i++) {

		a = Math.min(...numbers);
		if(numbers[i] === a) {
			A.push(a);
		} else {
			B.push(numbers[i]);
			b = Math.min(...B);
		}
	}
	return a + b;
}