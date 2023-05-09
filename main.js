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

const content = document.querySelector('.content')

// ADD OR REMOVE PAGE CONTENT
para.innerText = "This will replace the content";
detail.innerText+= " This will append the content";

paras.forEach(para=>{
  console.log(para.innerText);
  para.innerText+=' new text';

})


content.innerHTML+='<h2>This adds new element inside html tag</h2>'


const people = ['mario','lugi','yoshi']
people.forEach(person=>{
  content.innerHTML += `${person} ` 
})


// GET AND SET ATTRIBUTE
console.log(para.getAttribute('class'))
para.setAttribute('class','success')
para.setAttribute('style','color:green;')

// Better way of styling as it wont overrride
para.style.margin = '50px';


// ADDING AND REMOVING CLASSES
console.log(content.classList)
content.classList.add('error')
content.classList.add('erro2')
content.classList.remove('erro2')


// PARENT,CHILDREN,SIBLING
const del = document.querySelector('.deloitte')
console.log(del.children)

// Convert HTML collection to array
console.log(Array.from(del.children))

Array.from(del.children).forEach(child=>{
  child.classList.add('del-element')
})

console.log(del.parentElement);
console.log(del.children)
console.log(del.nextElementSibling);
console.log(del.previousElementSibling);

// Chaining

console.log(del.previousElementSibling.parentElement);