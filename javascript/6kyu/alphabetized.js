/*Instructions
The alphabetized kata
Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") // "BbeehHilloTy"
 */

//Solution
function alphabetized(s) {
	let str = s.split('');

	return str.filter((e, i, arr) => e.match(/[A-Z]/gi)).sort((a, b) => {
		if(a.toUpperCase() < b.toUpperCase()) {
			return -1;
		}
	}).join('');

}