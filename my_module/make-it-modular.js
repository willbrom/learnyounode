const mymodule = require("./mymodule")
mymodule(process.argv[2], process.argv[3], (err, data) => {
    if (err) return console.log(err)
    data.forEach(f => {
        console.log(f)
    });
})