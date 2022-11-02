const { Writable, Readable } = require('node:stream')

const duplexer2 = require('duplexer2')

const my_writable = new Writable({ objectMode: true })
const my_readable = new Readable({ objectMode: true })

my_writable._write = function (chunk, _, next) {
    if (my_readable.push(chunk)) return next()
    else return my_readable.once('drain', next)
}

my_readable._read = function (n) {}

const my_duplexer = duplexer2(my_writable, my_readable)

my_duplexer.on('data', (chunk) => {
    console.log(`writing ${chunk.message}`)
})

my_duplexer.write({message: 'hello, there'})
my_duplexer.write('hello again')
my_duplexer.end(function () {
    console.log('ending')
})
