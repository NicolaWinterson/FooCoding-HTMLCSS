/*JS » DOM Manipulation*/
/*JS » Append Child*/
const newElement = document.createElement("p")
newElement.innerHTML = "I am a text node that has been created by <em>Nicola</em>!"
document.body.appendChild(newElement)
//newElement.insertBefore(createP)

const createP = () => {
  let newP = document.createElement("p")
  let newContent = document.createTextNode("Good job")
  newP.appendChild(newContent)
  document.body.appendChild(newP)
}
const tryItButton = document.getElementById("btn3")
tryItButton.addEventListener("click", createP)