/*Instructions
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

//solution

function XO(str) {
	//code here
	let x = str.split('').filter((e) => e.toLowerCase() == 'x').length;
	let o = str.split('').filter((e) => e.toLowerCase() == 'o').length;

	x == 0 && o == 0 ? true : false;

	if(x == o) {
		return true;
	} else {
		return false;
	}
}