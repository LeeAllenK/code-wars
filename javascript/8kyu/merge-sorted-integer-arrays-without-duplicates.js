/*Instructions
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.


 */

//Solution
function mergeArrays(a, b) {
	// your code here
	let array = [];

	for(let i = 0; i < a.length; i++) {
		array.sort();
		array.push(a[i]);

	}

	for(let i = 0; i < b.length; i++) {
		array.sort();
		array.push(b[i]);
	}

	array.sort((a, b) => a - b);
	return array.filter((a, i) => array.indexOf(a) === i);

}