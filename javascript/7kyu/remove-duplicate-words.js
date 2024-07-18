/*Instructions

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
 */

//Solution
function removeDuplicateWords(s) {
	let str = s.split(' ');
	let filter = str.filter((item, index) => str.indexOf(item) === index)
	return filter.join(' ');
}