<<<<<<< HEAD
//step one, create an array
let arrayItems = [
    'first thing',
    'second thing',
    'third thing'
]

//step two, render array into HTML list
const renderArray = (item) => {
    const createLi = document.createElement('li')
    const createLiText = document.createTextNode(item)
    createLi.appendChild(createLiText)
    document.getElementById('list1').appendChild(createLi)
}
arrayItems.forEach(item => renderArray(item))

//step three, add event listener for when user clicks
//step four, remove item from array
=======
//step one, create an array
const todoItems = [
    'break things',
    'fix them',
]
console.log(todoItems.length)

const appendItem = (item) => {
    const newLi = document.createElement('li')
    const newLiText = document.createTextNode(item)
    newLi.appendChild(newLiText)
    document.querySelector('#todos ul').appendChild(newLi)
    //document.addEventListener("li")
}

const addItem = (element) => {
    //element.preventDefault()
    element.stopPropagation()
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

const removeListItems = (change) => {
    change.addEventListener("click", removeItem)
    console.log("you clicked!")
}
const removeItem = (index) => {
    todoItems.splice(index, 1)
    renderList()
}
//allListItems.forEach(removeListItems)

/*
const removeNode = (change) => {
      change.addEventListener("click", removeItem)
  
const removeItem = (item, index) => {
    //const index = todoItems.indexOf(item)
    todoItems.splice(index, 1)
}
*/

console.log(todoItems.indexOf())
//allListItems.forEach(removeItem)
  
document
    .querySelector('#todos form')
    .addEventListener('submit', addItem)
    //.getElementById("list1")
  
renderList()
>>>>>>> c74548612c04e618fe2382e86d7e162ba5600a39
