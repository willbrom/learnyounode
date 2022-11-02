const fs = require("fs")

const path = process.argv[2]
const extension = process.argv[3]

fs.readdir(path, (err, files) => {
    if (err) return console.log(err)
    files.forEach(f => {
        if (f.split(".")[1] === extension) console.log(f)
    })
})