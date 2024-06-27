// DOM
const headingELem = document.querySelector('header h1')
const bodyELem = document.querySelector('body')

headingELem.style.backgroundColor = 'gray'
headingELem.style.color = '#f7f7f7'
headingELem.style.fontSize = '3rem'
bodyELem.style.backgroundColor = '#101010'

headingELem.innerHTML = '<i>Hello World</i>'

headingELem.append(', Goodbye World')