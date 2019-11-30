
const allListItems = document.querySelectorAll("li")

const removeNode = (change) => {
    change.addEventListener("click", onClick)
    //console.log("you did something else")
}

const onClick = (eventContext) => {
    eventContext.target.remove();
}

allListItems.forEach(removeNode)