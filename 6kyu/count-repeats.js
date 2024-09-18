/*Instructions
Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1
 */

//Solution
function countRepeats(str) {
	// code solution
	return str.split('').filter((e, i, str) => e === str[i - 1]).length;

}