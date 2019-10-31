const fs = require('fs')
fs.createReadStream('./music.js')
.pipe(
    fs.WriteStream('./music-copy.js')
)