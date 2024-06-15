/*Instructions
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
 */

//Solution
function doubleChar(str) {
	// Your code here
	let s = str.split('');
	for(let i = 0; i < s.length; i++) {
		s[i] = s[i].repeat(2);
	}
	return s.join('');
}