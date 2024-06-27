// ES7

// Spread (Rest) operator

const language = {
	name: 'ru',
	level: 'difficult',
}

const languagePopulation = {
	population: 400000000,
}

console.log({ ...language, ...languagePopulation })

const nameFirst = ['Maxim', 'Evgeny']
const nameSecond = ['Vitaly', 'John']

console.log({ ...nameFirst, ...nameSecond })

// Destructuring

const { name } = {
	name: 'Maxim',
	age: 25
}

console.log(name)

// Destructuring with spread operator

const {...rest } = {
  name: 'Maxim',
  age: 25
}

console.log(rest)

// Template strings

const myName = 'Maxon'
const surName = 'Novikoff'

const fullName = `${myName} ${surName}`

console.log(fullName)

// Default parameters

const getMyPrice = (name = 'Mercedes') => {
	if (name === 'Mercedes') return 100000
	if (name === 'Ferrari') return 300000
}

console.log(getMyPrice('Ferrari'))

