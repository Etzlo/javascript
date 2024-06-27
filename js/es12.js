// ES12 2021

const text =
	'Lorem ipsum dolor sit amet ipsum consectetur ipsum adipisicing elit. Eligendi, inventore ipsum.'
console.log(text.replaceAll('ipsum', 'CHANGED'))

// New Logical Assignment Operator. 
// It means that the value of the left operand is assigned to the value of the right operand.

let newText = ''
// newText = newText || text - The same
newText ||= text
console.log(newText)

// Numeric Literal Separators
const numericPrice = 1000000
const newNumericPrice = 1_000_000

if (numericPrice === newNumericPrice) console.log(true)