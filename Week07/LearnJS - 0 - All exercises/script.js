/*JS » Create Functions*/

/*JS » OnClick*/
const button = document.getElementById('btn1');
const clickHandler = () => {
  alert('You did it!')
}
button.addEventListener('click', clickHandler)

/*JS » Web API*/
const greenButton = document.getElementById("btn2")
greenButton.addEventListener("click", toggleButton)
function toggleButton () {
  greenButton.classList.toggle("clicked");
}

/*JS » Event Context*/
let allButtons = document.querySelectorAll(".btn")
const changeButton = (change) => {
  change.addEventListener("click", onClick)
  console.log("you did something else")
}
const onClick = (eventContext) => {
  eventContext.target.classList.toggle("btn--clicked");
}
allButtons.forEach(changeButton)

/*JS » OnChange*/
const onChange = (evt) => {
    p1.innerHTML = evt.target.value; 
  }
  let textInput = inp1.innerHTML;
  console.log(textInput)
  console.log(onChange)
  inp1.addEventListener('keyup', onChange)

/*JS » The Chat Input*/
const onFormSubmit = (event) => {
  event.preventDefault()
  const textInput = document.querySelector('#chat input[type="text"]')
  console.log(textInput.value)
  const form = document.getElementById("chat")
  //const textInput = document.getElementById("input").value
  if (textInput.value === '') {
    alert("oh no! you done did wrong")
    } else {
      alert(textInput.value)
      form.reset()
     }
    textInput.focus() 
  }
//event.stopPropagation()
document
  .getElementById('chat')
  .addEventListener('submit', onFormSubmit)

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


/*JS » To Do List*/

