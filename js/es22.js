// ES22 2022

// Array AT

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numbers.at(-1))

// function f(a1, a2) {
// 	return (b1, b2) => {
// 		console.log(arguments[1])
// 	}
// }

// f(1, 2)(3, 4)

const delay = ms => result => new Promise(resolve => setTimeout(() => resolve(result), ms))

Promise.resolve('SAT')
	.then(delay(500))
	.then(result => console.log(result))


