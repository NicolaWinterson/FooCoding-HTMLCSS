const todos = [
  {
    text: "buy milk",
    completed: true
  },
  {
    text: "clean kitchen",
    completed: false
  },
  {
    text: "learn js",
    completed: false
  }
];

let hideCompleted = false;

const clearList = () => {
  //empty the todos
  document.querySelector("#todos ul").innerHTML = "";
};

const renderWelcomeMessage = () => {
  // else, show a welcome message
  document.querySelector("#todos ul").innerHTML = `
    <h2>It looks like you have no tasks</h2>
    <p>Add some todo items above</p>
  `;
};

const toggleListItem = (item) => {
  return () => {
    //alert("hello " + item.text)
    item.completed = !item.completed
    renderUI()
  }
}

const toggleCompletedItems = () => {
  //alert("you clicked!")
  hideCompleted = !hideCompleted
  renderUI()
}
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("click", toggleCompletedItems)

const renderListItems = (item, index) => {
  //           -> for each todo, render the item
  console.log(item, index);
  const itemText = document.createTextNode(item.text);
  const newLi = document.createElement("li");
  newLi.appendChild(itemText);
  newLi.addEventListener("click", toggleListItem(item))
  if (item.completed === true) {
    newLi.classList.add("completed")
  }

  document.querySelector("#todos ul").appendChild(newLi);
};

const renderOnlyCompleted = (item) => {
  return item.completed === false
}

const getVisibleItems = () => {
  return hideCompleted
  ? todos.filter(renderOnlyCompleted)
  : todos;
}

const renderItems = (visibleItems) => {
  visibleItems.forEach(renderListItems)
};

const renderList = () => {
  //empty current UL
  clearList();

  const visibleItems = getVisibleItems()

  if (visibleItems.length > 0) {
    renderItems(visibleItems);
  } else {
    renderWelcomeMessage();
  }
};

const renderCheckboxText = () => {
  const checkboxText = hideCompleted
    ? "Show completed items"
    : "Hide completed items";
  document.querySelector("#todos label").innerHTML = checkboxText
}

const renderUI = () => {
  renderList();
  renderCheckboxText()
}

const handleFormSubmit = (event) => {
  event.preventDefault()
  event.stopPropagation()
  if (!event.target.elements.todoText.value) {
    return;
  }
  todos.push({
    text: event.target.elements.todoText.value,
    completed: false
  })
  const form = document.getElementById("form")
  form.reset();
  form.focus();

  renderUI()
}

const handleVisualValidation = (event) => {
  console.log(event)
  console.log(event.target.value)
  const todosForm = document.querySelector("#todos form")

  if (event.keyCode === 27) {
    todosForm.elements.todoText.value = ""
  }

  if (event.target.value) {
    todosForm.classList.add("is-valid")
  } else {
    todosForm.classList.remove("is-valid")
  }
}

document
  .querySelector("#todos form")
  .addEventListener("submit", handleFormSubmit)
  
document
  .querySelector('#todos input[name="todoText"]')
  .addEventListener("keyup", handleVisualValidation)

renderUI();
