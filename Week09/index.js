<<<<<<< HEAD
console.log("hi")

const clickNavBar = () => {
    const allNavItems = document.querySelectorAll(".nav-item")
    allNavItems.forEach(navItem => {
        navItem.addEventListener("click", function (event) {
            console.log(event.target.href)
            event.preventDefault()
            history.pushState(null, null, event.target.href)
            renderContent()
        })
    })
}

const renderContent = () => {
    const navLocation = document.location.pathname
    const main = document.getElementById("dynamic")
    main.innerHTML = ""
    let content
    let subtitle
    switch (navLocation) {
        case "/":
            content = "Home"
            subtitle = "you are home"
            break
        case "/blog":
            content = "Blog"
            break
        case "/contact":
            content = "Contact"
            break
        default:
            break;
    }
    const newElement = document.createElement("h1")
    const newPElement = document.createElement("p")
    //let text = content
    //let subText = subtitle
    newElement.innerHTML = content
    newPElement.innerHTML = subtitle
    main.appendChild(newElement)
    main.appendChild(newPElement)
}

//renderContent()
clickNavBar()
console.log(history.length)

/*const homeLocation = document.location
document.location = "http://localhost:1234/"
const newElementHome = document.createElement("h1")
newElementHome.innerHTML = "Home"
homeLocation.appendChild(newElementHome)*/

=======
console.log("hi")

const clickNavBar = () => {
    const allNavItems = document.querySelectorAll(".nav-item")
    allNavItems.forEach(navItem => {
        navItem.addEventListener("click", function (event) {
            console.log(event.target.href)
            event.preventDefault()
            history.pushState(null, null, event.target.href)
            renderContent()
        })
    })
}

const renderContent = () => {
    const navLocation = document.location.pathname
    const main = document.getElementById("dynamic")
    main.innerHTML = ""
    let content
    let subtitle
    switch (navLocation) {
        case "/":
            content = "Home"
            subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            break
        case "/blog":
            content = "Blog"
            subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            break
        case "/contact":
            content = "Contact"
            subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            break
        default:
            break;
    }
    const newElement = document.createElement("h1")
    const newPElement = document.createElement("p")
    //let text = content
    //let subText = subtitle
    newElement.innerHTML = content
    newPElement.innerHTML = subtitle
    main.appendChild(newElement)
    main.appendChild(newPElement)
}

renderContent()
clickNavBar()
console.log(history.length)

/*const homeLocation = document.location
document.location = "http://localhost:1234/"
const newElementHome = document.createElement("h1")
newElementHome.innerHTML = "Home"
homeLocation.appendChild(newElementHome)*/

>>>>>>> c74548612c04e618fe2382e86d7e162ba5600a39
