/*Instructions
Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:

274 -> '2-7-4'
6815 -> '68-1-5'
 */

//Solution
function dashatize(num) {


	return String(num).split('').map((n, i, arr) => {
		if(n % 2 && n[0]) {
			return "-" + +n + '-';
		} else {
			return n;
		}
	}).join('').split('-').filter((e) => e !== '').join('-');

}