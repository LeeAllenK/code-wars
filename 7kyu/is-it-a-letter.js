/*Instructions

Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

 */

//Solution
function isItLetter(character) {
	return character.length === 1 && character.match(/[a-z]/i) ? true : false;
}