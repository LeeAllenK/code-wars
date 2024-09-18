/*Instructions
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


 */

//Solution
function removeExclamationMarks(s) {
	return s.split('').map(s => s.replace(/!+$/, "")).join('');
}
