/*Instructions
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
 */

//Solution
function onlyDuplicates(str) {
	// your code here
	let arr = str.split('').filter((s, i) => {
		return str.indexOf(s) !== str.lastIndexOf(s);
	})
	return arr.join('');
}