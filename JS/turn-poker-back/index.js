
const wrap = document.getElementById('wrap');
let images=[
    './image/h1.jpg',
    './image/h2.jpg',
    './image/h3.jpg',
    './image/h4.jpg',
    './image/h5.jpg',
    './image/h6.jpg',
    './image/h1.jpg',
    './image/h2.jpg',
    './image/h3.jpg',
    './image/h4.jpg',
    './image/h5.jpg',
    './image/h6.jpg'
]
let count = 0;
let firstimg = null;
let firstNum = null;
init();
let allImg = document
.querySelectorAll('#wrap img');

function init(){
    for(let i = 0;i < 12;i++){
        //<img src=" " class=" " id=" "/>
        let  img = document.createElement('img');
        img.src="./image/bg.jpg";
        img.onclick = function(){
            changeImage(img,i)
        }
        wrap.appendChild(img);
        images.sort((a,b)=>0.5-Math.random())

    }
}
function changeImage(imgNode,i){
    if(count===0){
        imgNode.classList.add('rotate-animation');
        imgNode.src=images[i];
        firstimg = images[i];
        firstNum = i;
    }
    if(count===1&&i===firstNum) return;
    if(count===1){
        imgNode.classList.add('rotate-animation');
        imgNode.src=images[i];
        setTimeout(()=>{
            if(images[i]===firstimg){
                wrap.removeChild(allImg[i]);
                wrap.removeChild(allImg[firstNum]);
            }
            else
            {
                allImg[firstNum].className=''
                allImg[i].className=''
                allImg[firstNum].src='./image/bg.jpg'
                allImg[i].src='./image/bg.jpg'
            }
            count = 0;
            firstimg = null;
            firstNum = null;
        },1100)
    }
    count++;
}

// var arr= [1,2,6,4,5]
// arr.sort();
// console.log(arr);


