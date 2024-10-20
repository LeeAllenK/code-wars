
// We need a function that can transform a number(integer) into a string.

// What ways of achieving this do you know ?

// 	Examples(input-- > output) :
// 	123  -- > "123"
// 999  -- > "999"
// 	- 100 -- > "-100"

//my solution
function countPositivesSumNegatives(input) {
	// your code here
	let pos = [];
	let sumNeg = []
	if(input == null || input.length == 0) return [];
	for(let i = 0; i < input.length; i++) {

		if(input[i] > 0) {
			pos.push(input[i]);
		} else {
			sumNeg.push(input[i]);
		}
	}
	return [pos.length, sumNeg.reduce((a, b) => a + b, 0)];
}