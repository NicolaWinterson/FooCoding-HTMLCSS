/*JS » Web API*/
const greenButton = document.getElementById("btn2")
greenButton.addEventListener("click", toggleButton)
function toggleButton () {
  greenButton.classList.toggle("clicked");
}