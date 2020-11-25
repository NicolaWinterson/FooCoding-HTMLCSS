const fs = require("fs")
const process = require('process')

const fileName = "data.json"
/* fs.readFileSync(fileName) */

let data
try {
    const raw = fs.readFileSync(fileName)
    data = JSON.parse(raw)
    console.log(data.test) //property on the JSON object
} catch (error) {
    fs.writeFileSync(fileName, "{}")
    data = {}
    console.log("Didn't find a file")
}

const arguments = process.argv.slice(2) //everything that is after index 1, which is an array
const testIndex = arguments.indexOf("-test")

if (testIndex >= 0) {
    data.test += arguments[testIndex +1] //added arguments
    fs.writeFileSync(fileName, JSON.stringify(data))
} else {
    console.log("No test happened")
}

/* console.log("Hello world!" + JSON.stringify(arguments)) */