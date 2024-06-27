// Store Data

/*
 * Cookies
 * Local Storage
 * Session Storage
 */

const toDoS = [
	{
		name: 'Shop',
		isCompleted: true,
	},
	{
		name: 'Cleaning',
		isCompleted: true,
	},
	{
		name: 'Buy T-shirt',
		isCompleted: false,
	},
]

localStorage.setItem('toDoS', JSON.stringify(toDoS))
console.log(JSON.parse(localStorage.getItem('toDoS')))

sessionStorage.setItem('toDoS', JSON.stringify(toDoS))
console.log(JSON.parse(sessionStorage.getItem('toDoS')))

document.cookie = `todos=${JSON.stringify(
	toDoS
)}; path=/; expires=Thu, 01 Jan 1970 00:0`

console.log(document.cookie)
