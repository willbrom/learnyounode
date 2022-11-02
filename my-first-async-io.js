const fs = require("fs")

fs.readFile(process.argv[2], (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    const lines = data.toString().split("\n").length - 1
    console.log(lines)
})