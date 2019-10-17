var parent=document.getElementById('content-items')/*获取ID*/
//console.log(parent)

var send=document.getElementById('send')
send.addEventListener('click',function(){
    var li=document.createElement('li')/*创建li*/
    //console.log(li)
    li.setAttribute('class','content-item')/*去修改或定义标签上面的类名属性*/

    var divpic=document.createElement('div')
    divpic.setAttribute('class','pic')
    li.appendChild(divpic)/*divpic是Li的子元素*/

    var img=document.createElement('img')
    img.setAttribute('src','images/u=2339025425,1419234903&fm=26&gp=0.jpg')
    divpic.appendChild(img)

    var message=document.createElement('div')
    essage.setAttribute('class','message')
    li.appendChild(message)

    var p1 =document.createElement('p')
    p1.setAttribute('class','name')
     var p1Text=document.createTextNode('111')/*创建文本节点*/
    p1.appendChild(p1Text)
    message.appendChild(p1)

   var p2 =document.createElement('p')
   p2.setAttribute('class','detail')
    var p2Text=document.createTextNode('5555555')/*创建文本节点*/
    p2.appendChild(p2Text)
    essage.appendChild(p2)


parent.appendChild(li)
})/*事件监听*/ 





// console.log(li)  在控制面板观察已创建的