/*Instructions
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */

//Solution
function toCamelCase(str) {

	let s = str.split('')
	let dashes = /\-/g;
	let underScores = /\_/g;
	let dash = str[str.search(dashes)];
	let underScore = str[str.search(underScores)];


	if(s.length === 0) {
		return s.join('');
	}

	for(let i = 0; i < s.length; i++) {
		if(s[i] == dash) {
			s[i + 1] = s[i + 1].toUpperCase();
		} else if(s[i] == underScore) {
			s[i + 1] = s[i + 1].toUpperCase();
		}
	}

	return s.filter((e, i, arr) => e !== dash && e !== underScore).join('');
}