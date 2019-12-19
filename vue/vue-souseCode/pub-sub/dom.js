// {
//   tag: 'div',
//   children: [
//     {
//       tag: 'a',
//       text: 'click me'
//     }
//   ]
// }

// <div>
//   <a>click me</a>
// </div>

// 为什么要依赖收集？
// 为了render改变数据的那一条数据
new Vue({
  template: 
    `<div>
      <span>{{text1}}</span>
      <span>{{text2}}</span>
    </div>`,
  data: {
    text1: 'text1',
    text2: 'text2',
    text3: 'text3'
  }
})

this.text3 = 'xxx' // text3因为没有用到，所以不会触发render函数