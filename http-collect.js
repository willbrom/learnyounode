'use strict'

const http = require("http")

http.get(process.argv[2], r => {
    let data = ""
    r.setEncoding("utf-8")
    r.on("data", d => data += d)
    r.on("end", () => console.log(`${data.length}\n${data}`))
    r.on("error", console.error)
}).on("error", console.error)

// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })