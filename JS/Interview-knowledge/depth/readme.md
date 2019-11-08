let b = JOSN.parse(JSON.stringfy(a))
将对象类型转为字符串格式，在又将字符串转化成对象类型

且这种转化的赋值，是深拷贝，不会对值做出改变

for of 遍历数组  for in 遍历对象