/*Instructions
In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!
 */

//Solution
function reverseVowels(str) {
	str = str.split('');
	let vowel = /[aeiou]/gi
	let r = str.filter(e => e.match(vowel)).reverse();
	let j = 0;
	for(let i = 0; i < str.length; i++) {

		if(str[i] == str[i].match(vowel)) {
			str[i] = str[i].replaceAll(str[i], r[j++]);
		}
	}

	return str.join('');
}