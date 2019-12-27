## localStorage
永久性的


## sessionStorage
当前这次会话的 存储(跳转后 在新页面也可以访问数据)

## cookie
domain: cookie 生效的域  在某个网站或者什么时候，保存的数据，只有在当前的域才能生效
        baidu.com:  的数据在 pan.baidu.com / map.baidu.com 都可以拿得到数据
        域是有包含关系的

path: 路径
/ 或者 /mobile  如果是根路径，那么这个下面所有的路径 都可以访问，如果是,mobile那么就是mobile路径才能访问

( domain和path构成了cookie生效的范围 )

expires/max-age： cookie生效的时间

httpOnly:    (cookie: 1.来自于服务端 2.来自于前端的js)
如果 httpOnly为 true的话，那么cookie就不能被js操作

secure: 只在https 环境下传输cookie