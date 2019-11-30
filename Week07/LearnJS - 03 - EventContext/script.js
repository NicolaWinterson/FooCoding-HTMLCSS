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