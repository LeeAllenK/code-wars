/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

Strings*/ 

//solution

function duplicateEncode(word) {
	// ...

	let dup = word.toLowerCase().split('').filter((e, i, arr) => arr.indexOf(e) !== i && i == arr.lastIndexOf(e));

	let w = word.split('');

	return w.map((e) => {
		if(dup.includes(e.toLowerCase())) {
			return e.replace(e, ')');
		}

		if(!dup.includes(e.toLowerCase())) {
			return e.replace(e, '(');

		}

	}).join('');
}