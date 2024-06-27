// ES11 2020

// Optional chaining
const phone = {
	model: { name: 'Iphone'},
	price: 1000
}

console.log(phone?.model.name)

// Nullish coalescing '||'
const brand = phone.brand || 'N/A'
console.log(brand)
const age = 0
console.log(age || 'N/A')


// Nullish coalescing '??'
const $age = 0
console.log($age ?? 'N/A')


// Nullish coalescing '&&'
const $brand = phone?.brand && phone.brand
const $$brand = phone?.brand ? phone.brand : 'null'
console.log($brand)
console.log($$brand)