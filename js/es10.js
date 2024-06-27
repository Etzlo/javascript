// ES10 2019

// Flat is an array of arrays.

const cars = ['Mercedes', 'Audi', 'BMW', 'Volvo', ['Lamborghini', 'Toyota']]

console.log(cars.flat())

// 

const personES10 = {
	name: 'Juan',
	age: 30,
  city: 'Madrid',
	getName() {
		return this.name
	}
}

const personES10array = [ ['name', 'Juan'], ['age', 30], ['city', 'Madrid'] ]

console.log(Object.fromEntries(personES10array))


// To String
const priceES10 = 100000
console.log(priceES10.toString())

// To Number
const priceES10Number = '100000'
console.log(priceES10Number.valueOf()) // String !!
console.log(Number(priceES10Number))
console.log(+priceES10Number)
console.log(parseInt(priceES10Number))