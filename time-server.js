const net = require("net")

function prependZero(v) {
    if (v / 10 < 1) return `0${v}`
    return v
}

net.createServer(socket => {
    let date = new Date()
    let year = date.getFullYear()
    let month = prependZero(date.getMonth() + 1)
    let day = prependZero(date.getDate())
    let hour = prependZero(date.getHours())
    let minute = prependZero(date.getMinutes())

    let fullDate = `${year}-${month}-${day} ${hour}:${minute}`
    socket.end(fullDate + "\n")
})
.listen(process.argv[2])
