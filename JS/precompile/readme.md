变量提升

函数声明  整体变量提升（把函数放到最前面）

变量      声明提升 var a = 123 <====> var a ; a = 123
                  将var = a提升

任何变量如果未经过声明就赋值，此变量就变成全局变量  ==> a = 123
一切声明的全局变量，都归window所有


函数的预编译  四部曲 发生在函数执行之前
1. 创建一个AO对象
2. 找形参和变量声明，将变量声明和形参，作为AO属性姓名，值为undefined
3. 将实参值和形参值统一  
4. 在函数体里找函数声明，将函数名作为AO对象的属性名，值赋予函数体

1. AO{

}
2. AO{
    a:undefined *形参
    b:unfedifined
}
3. AO {
    a:1
    b:undefined
}
4. AO {
    a:function(){}
    b:undefined
    d:function(){}
}

在按照函数执行

#全局变量的预编译也发生在全局
1. 创建Go对象
2. 找形参和变量声明，将变量声明和形参，作为GO属性姓名，值为undefined
3. 在函数体里找函数声明，将函数名作为GO对象的属性名，值赋予函数体

Go{}=====go=window
GO{
    global:und
    fn:fuction{(...)}
}

fn{
    AO{
        global:und
    }
}

GO{
    global:100
    fn:fuction{(...)}
}