
/*Instructions
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input wi
 */

//Solution
function capitalize(s) {
	s = s.split('')
	let even = [];
	let odd = [];

	for(let i = 0; i < s.length; i++) {
		if(i % 2 == 0 || i == 0) {
			let item = s[i].replace(s[i], s[i].toUpperCase())
			even.push(item)
		} else {
			even.push(s[i])
		}
		if(i % 2) {
			let item = s[i].replace(s[i], s[i].toUpperCase())
			odd.push(item)
		} else {
			odd.push(s[i])
		}


	}
	return [even.join(''), odd.join('')]
}