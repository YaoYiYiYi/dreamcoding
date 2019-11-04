//看到红色闪一下变成蓝色
document.body.style.backgroundColor = 'red'
setTimeout(()=>{
document.body.style.backgroundColor = 'blue'
},0)

//直接变成蓝色，红色不执行
document.body.style.backgroundColor = 'red'
document.body.style.backgroundColor = 'blue'
//说明在setTimeout之前就已经发生了一次 样式计算，并且浏览器会去渲染它