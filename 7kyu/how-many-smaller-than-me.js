/*Instructions
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output 
 */

//Solution
function smaller(nums) {
	//code 
	return nums.map((n, i) => nums.slice(i).filter((m) => m < n).length);
}