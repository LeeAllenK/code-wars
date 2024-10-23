/*Instructions
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
 */

//Solution
function encode(string) {
	a = 1
	e = 2
	I = 3
	o = 4
	u = 5
	let vowel = 'aeiou'
	string = string.split('')
	for(let i = 0; i < string.length; i++) {
		if(string[i] == 'a') {
			string[i] = string[i].replace(string[i], a)
		}
		if(string[i] == 'e') {
			string[i] = string[i].replace(string[i], e)
		}
		if(string[i] == 'i') {
			string[i] = string[i].replace(string[i], I)
		}
		if(string[i] == 'o') {
			string[i] = string[i].replace(string[i], o)
		}
		if(string[i] == 'u') {
			string[i] = string[i].replace(string[i], u)
		}
	}

	return string.join('')
}
function decode(string) {

	string = string.split('')
	for(let i = 0; i < string.length; i++) {
		if(string[i] == '1') {
			string[i] = string[i].replace(string[i], 'a')
		}
		if(string[i] == '2') {
			string[i] = string[i].replace(string[i], 'e')
		}
		if(string[i] == '3') {
			string[i] = string[i].replace(string[i], 'i')
		}
		if(string[i] == '4') {
			string[i] = string[i].replace(string[i], 'o')
		}
		if(string[i] == '5') {
			string[i] = string[i].replace(string[i], 'u')
		}
	}

	return string.join("")
}