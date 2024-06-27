// Fetch API (2 options)
let isLoading = true
// Promise
fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => response.json())
	.then(json => console.log(json))
	.catch(err => console.error(err))
	.finally(() => isLoading = false)


// Async, Await
const fetchToDo = async () => {
	try {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
	const json = await response.json()
	console.log(json)
	}
	catch (error) {
		console.error(error)
	}
}

fetchToDo()