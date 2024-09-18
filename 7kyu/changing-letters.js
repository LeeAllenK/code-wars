/*
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.

Fundamentals */


//solution
function swap(string) {
	let vowel = string.match(/[a,e,i,o,u]/gi);

	for(let i = 0; i < string.length; i++) {
		if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
			string = string.replace(string[i], string[i].toUpperCase())
		}
	}
	return string
}