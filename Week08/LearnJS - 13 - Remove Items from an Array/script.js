//step one, create an array
const todoItems = [
    'break things',
    'fix them',
]
console.log(todoItems.length)

const removeItem = (item, index) => {
    todoItems.splice(index, 1)
    renderList()
}

const appendItem = (item, index) => {
    const newLi = document.createElement('li')
    const newLiText = document.createTextNode(item)
    newLi.appendChild(newLiText)
    document.querySelector('#todos ul').appendChild(newLi)
    newLi.addEventListener("click", removeItem)
}

const addItem = (element) => {
    element.preventDefault()
    //element.stopPropagation()
    const textInput = element.target[0]
    todoItems.push(textInput.value)
    const resetValue = () => {
        textInput.value = ' '
    }
    renderList()
    resetValue()
}

const renderList = () => {
    clearList()
    todoItems.forEach(appendItem)
}

const clearList = () => {
    document
      .querySelectorAll('#todos ul li')
      .forEach(item => item.remove());
}

console.log(todoItems.indexOf())
  
document
    .querySelector('#todos form')
    .addEventListener('submit', addItem)
  
renderList()


