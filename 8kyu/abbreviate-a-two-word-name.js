/*Instructions

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 */

//solution
function abbrevName(name) {

	// code away
	return name.split(' ')
		.map(e => e.charAt(0).toUpperCase() ? e.charAt(0).toUpperCase() : e.charAt(0).toLowerCase())
		.join('.');

}