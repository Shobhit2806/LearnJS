const items = document.querySelectorAll('li');
const ul = document.querySelector('ul')
const btn = document.querySelector('button')
items.forEach(item => {
  item.addEventListener('click', e => {
    e.target.style.textDecoration = 'line-through';
    if (item.innerText == 'buy milk') {
      e.target.remove()
    }

  })
})

btn.addEventListener('click', e => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  ul.append(li)
})

// NOW THE LINE-THROUGH THING DOESN'T WORKING ON NEWLY ADDED CONTENT.LETS FIX THIS

