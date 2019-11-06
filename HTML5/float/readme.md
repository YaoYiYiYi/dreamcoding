子容器去到同一行但是会有空隙 display:inline-block; 
需要在父容器里面 加上一句 font-size: 0;

用了float 这样的话 就会脱离父容器 
float 可以用于图片，文字环绕

清楚浮动，在用完浮动以后在加一个div容器给他一个样式就可以清除浮动带来的影响
<div class="box">3</div>
<div class="clearfix"></div>
.clearfix{
        clear: left;
    }

优化的方法是 给浮动的元素用一个父容器包裹起来，然后给父容器一个伪类after::
.clearfix::after{
        content: '';
        clear: left;
        display: table;
    }

clear: both 是清楚左右浮动


方法三
在父容器的样式中添加以下的任何一个样式都可以清楚浮动
/* overflow: hidden; */
/* float: left; */
/* display: table; */
/* position: absolute;  只能用来弥补父容器塌陷*/
