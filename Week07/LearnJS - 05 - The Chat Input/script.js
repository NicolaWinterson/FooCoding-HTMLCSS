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