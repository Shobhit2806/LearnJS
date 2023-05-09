const para = document.querySelector('p')
console.log(para)

// Getting element via class name
const detail = document.querySelector('.detail')
console.log(detail)

// We can get the selector by inspecting an element in browser
const inspectedSelectorName = document.querySelector('body > div:nth-child(1) > div:nth-child(4)')
console.log(inspectedSelectorName)

// Selecting multiple elements at once
const paras = document.querySelectorAll('p')
console.log(paras)