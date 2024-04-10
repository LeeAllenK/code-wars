// 

//solution
function grow(x) {
	let reducer = x.reduce((acc, cValue) =>
		acc * cValue, 1
	)
	return reducer
}
grow([1, 2, 3, 4])

