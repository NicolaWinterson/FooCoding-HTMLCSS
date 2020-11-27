const fs = require("fs")
const process = require('process')

const fileName = "data.json"

let data

const readFile = async function() {
    return new Promise((resolve) => {
        fs.readFile(fileName, (err, raw) => {
            if (err) {
                fs.writeFileSync(fileName, "{}")
                data = {}
            } else {
                data = JSON.parse(raw)
            }
            resolve(data)
        })
    })    
}

const writeFile = async function(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, JSON.stringify(data), (err, raw) => {
            if (err) {
                console.log("something went wrong!")
            } 
            resolve(data)
        })
    })    
}

async function init() {
    
    const arguments = process.argv.slice(2) //everything that is after index 1, which is an array

    switch(arguments[0]) {
        case 'list': {
            let data = await readFile()
            console.log("your todos: " + data)
            //show an appropriate text if there are no todos
            break;
        }
        case 'add': {
            let data = await readFile()
            let words = arguments.slice(1).join(" ")
            data.push(words)
            console.log ("new todo: " + words)
            await writeFile(data)
            break;
        }
        case 'remove': {
            let data = await readFile()
            let grabArgument = arguments.slice(1)
            let number = grabArgument[0]
            let actualNumber = parseInt(number)
            removedEl = data.splice(actualNumber, 1);
            console.log("you removed the todo: " + removedEl);
            await writeFile(data)
            break;
        }

        case 'update': {
            //Updates a to-do item with new text:
            //node index.js update 3 "Brush teeth"
            let data = await readFile()
            let grabArgument = arguments.slice(1)
            let number = grabArgument[0]
            let actualNumber = parseInt(number)
            let text = grabArgument[1]
            console.log("argument received: " + number)
            console.log("text received: " + text)
            let spliced = data.splice(actualNumber, 1, text)
            console.log("you updated the todo: " + spliced + " and replaced it with: " + text)
            await writeFile(data)
            break;
        }

        case 'reset': {
            writeFile([])
            break;
        }
        case 'help': {
            console.log("type list to see a list of your todos")
            console.log("type add to add a todo")
            console.log("type remove and the number of the todo you want to remove")
            console.log("type reset to remove all items from the todo list")
            console.log("type update and the number of the todo you to update a specific todo item")
            break;
        }
        default: {
            console.log("type help to see a list of what you can do!")
            console.log("type list to see a list of your todos")
            console.log("type add to add a todo")
            console.log("type remove and the number of the todo you want to remove")
            console.log("type reset to remove all items from the todo list")
            console.log("type update and the number of the todo you to update a specific todo item")
        }
    }
}

init();

/* console.log("Hello world!" + JSON.stringify(arguments)) */