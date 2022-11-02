const fs = require("fs")

const path = process.argv[2]

const data = fs.readFileSync(path)
const lines = data.toString().split("\n")
console.log(lines.length - 1)