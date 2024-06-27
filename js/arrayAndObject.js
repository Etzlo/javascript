const studentsArray = ['Maxim', 'Vlad', 'John', 'Mary']
const studentsWithObjects = [
	{
		name: 'Maxim',
		age: 18,
	},
	{
		name: 'Vlad',
		age: 19,
	},
	{
		name: 'John',
		age: 20,
	},
	{
		name: 'Mary',
		age: 21,
	},
]

// Map - call a defined function for each element in an array
console.log(studentsArray.map((name, index) => `${index + 1}. ${name}`).join('\n'))


// Filter - return only elements that pass the test
console.log(studentsWithObjects.filter(student => student.age > 19).map(student => student.name).join('\n'))


// Push - add new element at the end of an array
studentsWithObjects.push({
	name: 'Alex',
  age: 22,
})

console.log(studentsWithObjects)

// Unshift - add new element at the start of an array

studentsWithObjects.unshift({
  name: 'Alex',
  age: 22,
})

console.log(studentsWithObjects)

// Slice

console.log(studentsWithObjects.slice(1, 3))

// Splice

console.log(studentsWithObjects.splice(2, 3))

// Find

console.log(studentsWithObjects.find(student => student.name === 'Maxim'))

// Find Index

console.log(studentsWithObjects.findIndex(student => student.name === 'Maxim'))

// Sort

console.log(studentsWithObjects.sort((a, b) => a.age - b.age))