const http = require('http')
const fs = require('fs')
const urls = require('url')
const nodemailer = require('nodemailer')
let code = 2333
// 返回/register 展示一个 注册的html
// 注册成功之后 展示一个成功的html
http.createServer((req,res) => {
    const method = req.method
    const url = req.url
    const urlObj = urls.parse(url)
    console.log('url',url)
    if(url === '/register' && method === 'GET'){
        // req res 两个对象继承了 流Stream 和 事件event
        res.writeHead(200,{
            'Content-Type': 'text/html;utf8'
        })
        fs.createReadStream('./register.html').pipe(res)
    }else if(urlObj.pathname === '/sendEmail' && method==='GET'){
        const emailQs = urlObj.query
        console.log('emailQs',emailQs)
        const email = emailQs.split('=')[1]
        const transport = nodemailer.createTransport({
            service:'qq',
            port:465,
            secureConnection: true,
            auth:{
                user:'1140640248@qq.com',
                pass:'gmbixktbkhokfjfj'
            }
        })
        transport.sendMail({
            to:email,
            html:`<h2>${code}<h2>`,
            from:'1140640248@qq.com',
            subject:"code"
        },(err, info)=>{
            if(err){
                res.end(JSON.stringify({
                    code: 500,
                    email
                }))
            }
            else{
                res.end(JSON.stringify({
                    code:200,
                    email
                }))
            }
        })
        res.writeHead(200, {
            'Content-Type' : 'application/json'
        })
        res.end(JSON.stringify({
            code: 200,
            email
        }))
        console.log(emailQs)
    }
    else if(urlObj==='/register1'&& method ==='GET'){
        let data
        req.on('data',(c) => {
            data+=c
        })
        req.on('end',()=>{
            res.end(data)
        })
    }
    else{
        res.end('访问出错')
    }
})
.listen(3344, () => {
    console.log('server is running http://localhost:3344')
})