const http = require('http')

const endpoints = ['/api/parsetime', '/api/unixtime']

http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)
    
    const epIndex = endpoints.findIndex(v => v === url.pathname)
    if (epIndex < 0) return res.end("Bad request\n")

    const iso = url.searchParams.get('iso')
    if (!iso) return res.end("Missing parameter\n")

    const date = new Date(iso)
    let response = {}

    switch (epIndex) {
        case 0:
            const hrs = date.getHours()
            const mins = date.getMinutes()
            const secs = date.getSeconds()
            response.hour = hrs
            response.minute = mins
            response.second = secs
            break
        case 1:
            const time = date.getTime()
            response.unixtime = time
            break
    }

    if (response) {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(response))
    } else {
        res.writeHead(404)
        res.end()
    }
}).listen(process.argv[2])