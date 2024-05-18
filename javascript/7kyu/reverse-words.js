/*Instructions
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */

//Solution
function reverseWords(str) {
	// Go for it
	let s = str.split(' ');
	for(let i = 0; i < s.length; i++) {
		s[i] = s[i].split('').reverse().join('');
	}
	return s.join(' ');
} 