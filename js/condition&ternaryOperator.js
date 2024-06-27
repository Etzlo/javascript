// Condition & ternary operator
/*
function getStatus(age) {
	if (age < 14) return 'Children'
	else if (age < 20) return 'Teenager'
	else if (age < 50) return 'Adult'
	else return 'Old'
}
*/

const getStatus = age =>
	age < 14 ? 'Children' : age < 20 ? 'Teenager' : age < 50 ? 'Adult' : 'Old'

// console.log(getStatus(18))
