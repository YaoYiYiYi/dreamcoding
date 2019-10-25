const https = require('https');
const cheerio = require('cheerio')
const http =require('http')

// doubanSpider('https://movie.douban.com/top250', (data) => {
//     //得到结果
//     console.log(data)
    
// })
function doubanSpider(url, cb) {
    https.get(url, (res) => {
        let html = ''
        //流的形式返回
        res.on('data', (chunk) => {
            html += chunk
        })
        res.on('end', () => {
            //console.log(html)
            //jquery 
            let  movies = []
            const $ = cheerio.load(html)
            $('li .item').each(function () {
                //图片的地址
                const picUrl = $('.pic img', this).attr('src');
                const title = $('.info .title', this).text();
                const star = $('.star .rating_num', this).text()
                const inq = $('.inq', this).text();
                //console.log({ picUrl, title, star, inq })
                //cb({picUrl, title, star, inq })
                movies.push({picUrl, title, star, inq})
            })
            cb(movies);
        })
    })
}
http.createServer((req,res)=>{
    doubanSpider('https://movie.douban.com/top250',(data) => {
     res.writeHead(200,{
         //mine 类型 text/plain=纯文本  text/html=html
         'Content-type':'application/json',
         'Access-Control-Allow-origin':'*'
     })
     res.end(JSON.stringify(data))
        
    })
}).listen(3000,()=>{
    console.log('server is running 3000')
})
