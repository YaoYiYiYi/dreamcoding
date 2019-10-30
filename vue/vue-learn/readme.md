v-if  v-else  用true和false 的值来表示 两者只展示一个dom结构，另外一个是不加载的
v-show = false 只是将这个dom结构的css的style属性 display:none 
v-html = xxx  能够解析html文件       v-text 只能够显示文本

v-on: ===  @  表示监听事件  v-on:click===@click  = " xxx" 绑定点击事件


v-bind:class = "isActive? a:b" 用来判断添加类名
      :class = "isActive? a:b" 用来判断添加类名(可以不添加v-bind)


:class="[classA,classB]"    将classA 和classB在data里面定义 就可以直接添加类名classA和classB的value
:class="{good: className}"  在className在  data 里面定义布尔值,就可以判断是否添加类名'good'
computed: { 
            里面写入修改数据源的方法，然后返回值，在html里面调用这个方法的值，这样可以返回更新值，
            但不会修改数据源的值
}

var ext ={
           created(){
                console.log('我是扩展的created')
            }
        }
 extends: ext 这样可以引入一个新的对象，但引入的方法(methods里面所存在的话)，是不会替代原来(methods)的方法

 watch:{
         wendu: function(newVal,oldVal){
            if(newVal >=26){
                this.suggest = '短袖'
            }
            else  if(newVal<26 &&newVal>10){
                this.suggest = '长袖'
             }
            else{
                this.suggest = '羽绒服'
            }
        }
 }
 watch 可以监听某个值来，更新别的值