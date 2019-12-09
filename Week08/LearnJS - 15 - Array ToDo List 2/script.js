//step one, create an array
const todoItems = [
    'break things',
    'fix them',
]

const doneItems = []

console.log(todoItems.length)

const moveToDone = (item) => {
    const index = todoItems.indexOf(item);
    const spliced = todoItems.splice(index, 1);
    addDoneItems(spliced)
    renderList();
};

const appendItem = (item, index) => {
    const newLi = document.createElement('li')
    const newLiText = document.createTextNode(item)
    newLi.appendChild(newLiText)
    document.querySelector('#todos ul').appendChild(newLi)
    newLi.addEventListener('click', () => {
        moveToDone(item)
    });
}

const appendDoneItem = (item, index) => {
    const doneLi = document.createElement('li')
    const doneLiText = document.createTextNode(item)
    doneLi.appendChild(doneLiText)
    document.querySelector('#doneItems ul').appendChild(doneLi)
    /*newLi.addEventListener('click', () => {
        moveToDone(item)
    });*/
}

const addDoneItems = (item) => {
    //element.preventDefault()
    doneItems.push(item)
    console.log(item)
    renderList()
}

const addItem = (element) => {
    element.preventDefault()
    //element.stopPropagation()
    const textInput = element.target[0]
    if (textInput.value === '') {
        alert("oh no! add something")
    } else {
        todoItems.push(textInput.value)
    }
    const resetValue = () => {
        //textInput.value = ' '
        document.getElementById("form").reset();
    }
    renderList()
    resetValue()
}

const renderList = () => {
    clearList()
    todoItems.forEach(appendItem)
    doneItems.forEach(appendDoneItem)
}

const clearList = () => {
    document
        .querySelectorAll('#todos ul li')
        .forEach(item => item.remove());   
    document
        .querySelectorAll('#doneItems ul li')
        .forEach(item => item.remove());
}

/*const toggleHideShow = () => {
    const toggleDoneItems = document.getElementById("doneItems");
    if (toggleDoneItems.style.display === "none") {
        toggleDoneItems.style.display = "block";
    }   else {
        toggleDoneItems.style.display = "none";
    }
}*/

document.getElementById('todosDone').onclick = function() {
    const toggleDoneItems = document.getElementById("doneItems");
    toggleDoneItems.style.display = toggleDoneItems.style.display === 'none' ? 'block' : 'none';
  };

const appendToDoP = (item) => {
    const newP = document.createElement('p')
    const newPText = document.createTextNode(`${doneItems.length} completed task(s)`)
    newP.appendChild(newPText)
    document.getElementById('todosDone').appendChild(newP)
}

console.log(todoItems.indexOf())
console.log(Array.isArray(doneItems))

document
    .querySelector('#todos form')
    .addEventListener('submit', addItem)

renderList()
appendToDoP()


