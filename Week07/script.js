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
    console.log(onFormSubmit)
    //event.preventDefault()
    //event.stopPropagation()
    //let textValue = document.getElementById('chat').value
    //console.log(textValue)
    let value = document.getElementById("text-input-box").value
    console.log(value)
    if (value === "") {
        alert("error, you need to type something")
      } else {
        alert(value)
        document.getElementById("chat").reset()
      }
      
  }

//const textInput =  
document
    .getElementById('chat')
    .addEventListener('submit', onFormSubmit)

/*FOURTH CHALLENGE - CREATING NEW HTML DOM INPUTS*/
const addElement = () => { 
    // create a new div element 
    var newDiv = document.createElement("div"); 
    // and give it some content 
    var newContent = document.createTextNode("Hi there and greetings!"); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
  
    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  }
