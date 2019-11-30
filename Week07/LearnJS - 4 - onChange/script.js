/*JS » OnChange*/
const onChange = (evt) => {
    p1.innerHTML = evt.target.value; 
  }
  let textInput = inp1.innerHTML;
  console.log(textInput)
  console.log(onChange)
  inp1.addEventListener('keyup', onChange)