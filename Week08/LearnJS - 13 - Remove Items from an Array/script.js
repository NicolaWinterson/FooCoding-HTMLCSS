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
