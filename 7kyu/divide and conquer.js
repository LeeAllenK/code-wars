/*Instructions
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
 */

//Solution
function divCon(x) {
	const nonIntegers =  x.filter((e) => e === +e).reduce((a,b) => +a + +b,0)
	const integers =  x.filter((e) => e === e.toString()).reduce((a,b) => +a + +b,0)
	
	return nonIntegers-integers;
}