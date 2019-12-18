## 
html(string) 解析 dom 树
css 解析为 cssom
合成render tree
生成 layout tree
绘制 paint 
composite 合成： 一个页面有很多的分层 最终合成一个平面  

## 性能优化
js relayout paint composite

改变了 元素的布局： width, height, display layout (重排)layout ->
改变了 元素的 color, shadow (重绘) repaint->
composite: transform opacity 前提条件是 变化的元素处于一个 独立的 层 上面

提升： 
1. will-change
2. 3d transform: `transform3D(60px, 0, 0)`
3. animation transition 激活的时候
4. video
5. backface-visibility: hidden

left, top
transform
