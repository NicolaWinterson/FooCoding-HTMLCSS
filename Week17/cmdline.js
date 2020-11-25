const process = require('process')

const arguments = process.argv.slice(2)

const hasTest = arguments.includes("-test")

if (hasTest) {
    console.log("Had a test")
} else {
    console.log("No test happened")
}

console.log("Hello world!" + JSON.stringify(arguments))
