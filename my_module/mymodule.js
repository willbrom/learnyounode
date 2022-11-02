const fs = require("fs")
const path = require("path")

module.exports = function (dir, ext, cb) {
    ext = "." + ext
    fs.readdir(dir, (err, files) => {
        if (err) return cb(err)
        
        const ffiles = files.filter(f => path.extname(f) === ext)

        cb(null, ffiles)
    })
}