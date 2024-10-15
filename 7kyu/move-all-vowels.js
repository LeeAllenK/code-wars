/*Instructions
Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples
"day"    ==>  "dya"
"apple"  ==>  "pplae"
 */

//Solution
function moveVowel(input) {
	vowels = 'aeiou';
	let arr = input.split('');
	let v = [];
	let noV = [];
	for(let i = 0; i < arr.length; i++) {
		if(vowels.includes(arr[i])) {
			v.push(arr[i]);
		} else {
			noV.push(arr[i]);
		}
	}
	return noV.join('') + v.join('');
}