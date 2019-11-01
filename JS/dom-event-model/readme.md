# 事件模型
捕获  
冒泡
三个阶段： 捕获阶段 目标阶段 冒泡阶段


捕获阶段是从外到内
冒泡是从内到外的

addEventListener
第三个参数： 默认会为 false冒泡阶段 true就是捕获阶段

//可以阻止传播
inNode.addEventListener('click',function(event){
    event.stopPropagation()
    console.log(1)
})

//可以阻止a  event.preventDefault() 跳转
const md = document.getElementById('md')
        md.addEventListener('click',function(){
            event.preventDefault()
        })


# 请用DOM2 级别的事件来....
DOMO onclick 
只能绑定一个事件 元素.onClick = ()=>{}  然后一个元素.add可以绑定好几个

DOM2 add
DOM3 add  增加了很多键盘鼠标事件 

