/*Instructions
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


 */

//Solution
function problem(x) {
	if(x === x.toString()) {
		return 'Error';
	}
	let sum = x * 50;
	return sum + 6;
}