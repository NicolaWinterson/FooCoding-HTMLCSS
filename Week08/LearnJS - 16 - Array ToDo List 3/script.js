/**
 * You are in full command here!
 * try to use all you did in the last
 * couple of steps.
 */

/**
 * The state of the App is getting more
 * interesting as we now want to introduce
 * a status information in every item.
 */
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
  
  const clearList = () => {
    //empty the todos
    document.querySelector("#todos ul").innerHTML = "";
  };
  
  const renderWelcomeMessage = () => {
    // else, show a welcome message
  };
  
  const toggleListItem = (item) => {
    return () => {
    alert("hello")  
    }
      
  }
  
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
  
  const renderItems = () => {
    //-> iterate through the todos
    todos.forEach(renderListItems);
  };
  
  const renderList = () => {
    //empty current UL
    clearList();
    if (todos.length > 0) {
      renderItems();
    } else {
      renderWelcomeMessage();
    }
  };
  renderList();
  