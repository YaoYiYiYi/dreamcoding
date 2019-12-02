const fs = require('fs');
const http = require('http');
const path = require('path');
http.createServer((req, res) => {
  // console.log(__dirname) 当前目录
  const filePath = path.join(__dirname, req.url);
  // star status
  fs.stat(filePath, (err, stats) => {
    console.log(stats)
    if (err) {
      res.statusCode = 404;
      res.end(`${filePath}: 404`);
      return ;
    }
    if (stats.isFile()) {
      res.statusCode = 200;
      fs.createReadStream(filePath).pipe(res)
    } else if (stats.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        let filesLink = files.map(file => {
          return `<a href="${req.url === '/' ? '' : req.url+ '/'}${file}">${file}</a><br/>`
        }).join('')
        // res.end(files.join('|'))
        res.end(filesLink)
      })
    } else {
      return 
    }
  })
}).listen(3000, () => {
  console.log('http://localhost:3000')
})