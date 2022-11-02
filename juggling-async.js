const http = require("http")

const args = process.argv;

function makeRequest(url) {
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let data = ""
            res.setEncoding("utf-8")
            res.on("data", d => {
                data += d
            })
            res.on("end", () => resolve(data))
            res.on("error", err => reject(err))
        }).on("error", err => reject(err))
    })
}

Promise.all([makeRequest(args[2]), makeRequest(args[3]), makeRequest(args[4])]).then(value => console.log(value.join("\n")))