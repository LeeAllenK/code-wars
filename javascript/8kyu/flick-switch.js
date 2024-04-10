// Task
// Create a function that always returns True / true for every item in a given list.
// 	However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// 	Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.


//solution 
function flickSwitch(arr) {
	let flick = true;

	return arr.map(el => el === 'flick' ? flick = !flick : flick)
}
