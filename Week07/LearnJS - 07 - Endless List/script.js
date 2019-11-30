/*JS » Endless List*/

let clickNum = 1
const createLi = () => {
  clickNum += 1;
  let newLi = document.createElement("li")
  let newLiText = document.createTextNode("Item No." + clickNum)
  newLi.appendChild(newLiText)
  document.getElementById("list1").appendChild(newLiText);
}

const addNewItemButton = document.getElementById("btn4")
addNewItemButton.addEventListener("click", createLi)
