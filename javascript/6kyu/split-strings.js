/*Instructions
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
 */

//Solution
function solution(str) {
	let s = str.split('');
	let arr = [];
	for(let i = 0; i < s.length; i += 2) {
		result = s[i + 1] || '_';
		arr.push(s[i] + result);
	}
	return arr;
}