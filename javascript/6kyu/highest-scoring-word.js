/*Instructions
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

//Solution
function high(x) {

	a = x.split(' ')
	let result = '';
	let num = a.map((e, i, arr) => {
		return e.split('').map((e) => e.charCodeAt() - 96).reduce((a, b) => a + b, 0)
	})

	for(let i = 0; i < a.length; i++) {
		if(a[i].split('').map((e) => e.charCodeAt() - 96).reduce((a, b) => a + b, 0) == Math.max(...num)) {
			result = a[i]
		}


		if(a[i].split('').map((e) => e.charCodeAt() - 96).reduce((a, b) => a + b, 0) !== Math.max(...num) && a[a.length - 1].split('').map((e) => e.charCodeAt() - 96).reduce((a, b) => a + b, 0) == Math.max(...num)) {
			result = a[0]
		}

		if(a[0].split('').map((e) => e.charCodeAt() - 96).reduce((a, b) => a + b, 0) == Math.max(...num) && a[1].split('').map((e) => e.charCodeAt() - 96).reduce((a, b) => a + b, 0) == Math.max(...num)) {
			result = a[0]
		}
	}



	return result
}