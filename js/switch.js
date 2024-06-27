// Switch
function getPriceSwitch(model) {
	let name = ''
	switch (model) {
		case 'Mercedes':
		case 'BMW':
			name = 'Expensive'
			return '100000$'
		case 'Ferrari':
			return '200000$'
    case 'Audi':
			return '50000$'
		default:
			return null
	}
}

console.log(getPriceSwitch('BMW'))
