/*Instructions
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
 */

//Solution
function vowelIndices(word) {
	let w = word.split('')
	let res = [];

	for(let i = 0; i < w.length; i++) {

		if(w[i] === 'a' || w[i] === 'e' || w[i] === 'i' || w[i] === 'o' || w[i] === 'u' || w[i] === 'y' || w[i] === 'a'.toUpperCase() || w[i] === 'e'.toUpperCase() || w[i] === 'i'.toUpperCase() || w[i] === 'o'.toUpperCase() || w[i] === 'u'.toUpperCase() || w[i] === 'y'.toUpperCase()) {
			res.push(i + 1)
		}
	}
	return res;
}
