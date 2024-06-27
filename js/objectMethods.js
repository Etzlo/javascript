const personObject1 = {
	name: 'Max',
	age: 18,
	city: 'Almaty',
	getName: function () {
		return this.name
	},
}

const personObject2 = {
	name: 'Max',
	age: 18,
	city: 'Almaty',
	getName: function getName() {
		return this.name
	},
}

const personObject3 = {
	name: 'Max',
	age: 18,
	city: 'Almaty',
	getName: () => {
		// Здесь использование стрелочной функции может вызвать проблемы с контекстом (this)
		return this.name
	},
}

const personObject4 = {
	name: 'Max',
	age: 18,
	city: 'Almaty',
	getName() {
		return this.name
	},
}

console.log(personObject1.getName())
console.log(personObject2.getName())
console.log(personObject3.getName()) // Look at the issue with this
console.log(personObject4.getName())

const employeesObject = {
	salary: '$10 000'
}

// Merging objects (assign)
console.log(Object.assign(personObject1, employeesObject))

// Merging objects (spread)
console.log({...personObject1, ...employeesObject})

// Entries (array)
console.log(Object.entries(personObject1))

// Keys and Values (object)
console.log(Object.keys(personObject1))
console.log(Object.values(personObject1))
