/*Instructions
When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"

Note: Only lowercased English letters are tested

Fundamentals
 */

//Solution
function position(letter) {
	//Write your own Code!
	let alpha = 'abcdefghijklmnopqrstuvwxyz'
	let res = []
	for(let i = 0; i < alpha.length; i++) {
		if(alpha[i] == letter) {
			res.push(i + 1)
		}
	}
	return `Position of alphabet: ${res.join('')}`
}