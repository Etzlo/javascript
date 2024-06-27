// Functions
// Function declaration
function getName() {
	return 'Maxim'
}
// console.log(getName())

// Function expression
const getSurname = function () {
	return 'Novikoff'
}
// console.log(getSurname())

// Arrow function
const getName2 = () => 'Vlad'
const getPrice = name => {
	if (name === 'Mercedes') return 100000
	if (name === 'Audi') return 50000

	return null
}
// console.log(getPrice('Mercedes'))
