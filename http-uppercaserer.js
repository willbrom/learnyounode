const http = require('http')

http.createServer((req, res) => {
    if (req.method !== 'POST') return res.end("send POST's\n")
    
    req.setEncoding('utf-8')
    req.on('data', d => res.write(d.toUpperCase()))
    req.on('end', () => res.end())
}).listen(process.argv[2])