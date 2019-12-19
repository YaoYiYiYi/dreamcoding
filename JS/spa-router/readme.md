## hash
url 不好看
好处 兼容性

## history
baidu.com => baidu.com/s/
url 好看
坏处： js  pushState() 不会引起页面的刷新，但是 /url4 点击刷新，是会把 /url4
发送到后端请求资源的, 后端没做处理 404

window.add(popstate): 检测到 浏览器前进后退
 back go forward 这几个行为带来的url的变化