const todoItems = [
  'break things',
  'fix them',
]

const renderList = () => {
  clearList()
  todoItems.forEach(appendItem)
}

const clearList = () => {
  document
    .querySelectorAll('#todos ul li')
    .forEach(item => item.remove());
}

const appendItem = (item) => {
  const newLi = document.createElement('li')
  const newLiText = document.createTextNode(item)
  newLi.appendChild(newLiText)
  document.querySelector('#todos ul').appendChild(newLi)
}

const addItem = (element) => {
  element.preventDefault()
  element.stopPropagation()

  const textInput = element.target[0]

  todoItems.push(textInput.value)
  renderList()
  //reset value
  textInput.value = ' '
}

document
  .querySelector('#todos form')
  .addEventListener('submit', addItem)

renderList()