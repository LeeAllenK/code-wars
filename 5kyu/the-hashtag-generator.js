/* Instructions
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/ 

//solution

function generateHashtag(str) {

	let s = str.split(' ').filter((e) => e !== '')

	let string = s.map((e) => {
		return e.charAt(0).toUpperCase() + e.slice(1)
	})

	if(string.length > 140 || string.length == 0) {
		return false;
	}

	res = '#' + string.join('')
	return res.length > 140 ? false : res

}