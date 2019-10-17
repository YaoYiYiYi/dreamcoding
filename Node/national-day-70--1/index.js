const package = require('./package.json');
//引入 package文件
const images = require('images');
const bg_image = images('./images/weixin.jpg');
const gq_images = images('./images/gq.jpeg')
//console.log(gq_images);
const offset = {x:5,y:5};
console.log(gq_images.width(),gq_images.height());
const foreground_image = images(gq_images.width() + offset.x,gq_images.height()+offset.y).
 fill(0xff,0xff,0xff,1).draw(gq_images,offset.x,offset.y);

 const pos={
     x: bg_image.width() - gq_images.width(),
     y: bg_image.height() - gq_images.height()
 }
bg_image.draw(foreground_image, pos.x, pos.y).save('./images/result.jpg', {quality: 100})
