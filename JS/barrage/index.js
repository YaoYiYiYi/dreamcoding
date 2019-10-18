let data = [
    {
        value:'周杰伦',
        time:5,
        color:'red',
        speed:1,
        fontSize:22
    },
    {
        value:'周杰伦2',
        time:10,
        color:'red',
        speed:1,
        fontSize:22
       },
    {
        value:'周杰伦3',
        time:11,
        color:'blue',
        speed:1,
        fontSize:22
    },
    {
        value:'周杰伦4',
        time:5,
        color:'#00a1f5',
        speed:1,
        fontSize:22
       },
       {
        value:'周杰伦5',
        time:15
       }
]

//获取所有需要的dom结构
let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $txt = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')

class CanvasBarrage{
    constructor(canvas,video,opts={}){
        //如果canvas和video都没有传
        if(!canvas||!video){
            return
        }
        //增加属性，加到this上===加到类上面
            this.video = video
            this.canvas = canvas

            this.canvas.width = video.width
            this.canvas.height = video.height
        //获取画布convas
        this.ctx = canvas.getContext('2d')

        //设置默认参数,如果没有传参，那就默认是这个参数
        let defOpts = {
            color:'#e91e63',
            speed: 1.5,
            opacity: 0.5,
            fontSize: 20,
            data:[]
        }
        //合并对象，且全部挂载到this的实例上面
        Object.assign(this,defOpts,opts)
        //将多个合并到一个对象的方法assign是两个对象合并到this上
        //添加属性，用来判断播放状态，默认true是暂停
        this.isPaused = true 
        //获取所有的弹幕消息
        this.barrages = this.data.map(item=> new Barrage(item,this))
        //渲染弹幕
        this.render()
    }
    render(){
        //清除原有的画布
        this.clear()
        //渲染弹幕
        this.randerBarrage()
        //如果没有暂停的话，就继续渲染
        if(this.isPaused===false){
            // .bind表示作用域不会被修改
            requestAnimationFrame(this.render.bind(this))
        }
    }
    clear(){
        //清除画布
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
    randerBarrage(){
        //根据视频播放的时间和弹幕展示的时间做比较，是否展示弹幕
        let time = this.video.currentTime
        this.barrages.forEach(barrage => {
            //只有在视频播放的时间大于等于弹幕展示的时间，才做处理
        if(!barrage.flag&&time >=barrage.time){
            //判断当前弹幕是否初始化
            if(!barrage.isInit){
                barrage.init()
                barrage.isInit=true
            }
            //弹幕从右往左渲染，所以X坐标减去当前弹幕的速度Speed
            barrage.x -=barrage.speed
            barrage.render()

            //如果当前弹幕的x坐标比自身宽度还小，就表示渲染结束
            if(barrage.x<-barrage.width){
                barrage.flag = true
            }
        }

        });
    }
    add(obj){
        this.barrages.push(new Barrage(obj,this))
    }
}

//Barrange类拿来用来实例化，每一条弹幕
class Barrage{
    constructor(obj,ctx){
        this.value = obj.value
        this.time = obj.time
        this.obj = obj
        this.context = ctx
    }

    init(){
        //如果数据没有输入完整值，那么就默认是初始的
        this.color = this.obj.color||this.context.color
        this.speed = this.obj.speed||this.context.speed
        this.opacity = this.obj.opacity||this.context.opacity
        this.fontSize = this.obj.fontSize||this.context.fontSize

        let p = document.createElement('p')
        p.style.fontSize = this.fontSize+'px'
        p.innerHTML = this.value
        document.body.appendChild(p)
        this.width = p.clientWidth
        document.body.removeChild(p)

        //设置弹幕出现的位置
        this.x = this.context.canvas.width
        this.y = this.context.canvas.height*Math.random()

        if(this.y<this.fontSize){
            this.y = this.fontSize
        }
        else if(this.y>this.context.canvas.height-this.fontSize){
            this.y = this.context.canvas.height-this.fontSize
        }
    }

    //渲染每一条弹幕
    render(){
        //设置画布/字体
        this.context.ctx.font = `${this.fontSize}px Arial`
        //设置画布的文字颜色 
        this.context.ctx.fillStyle = this.color
        //绘制文字
        this.context.ctx.fillText(this.value,this.x,this.y)
    }
}

let canvasBarrage = new CanvasBarrage(canvas,video,{data})
video.addEventListener('play',()=>{
    canvasBarrage.isPaused = false
    canvasBarrage.render()//触发弹幕
})

//发送弹幕的方法
function send(){
    let value = $txt.value
    let time = video.currentTime
    let color = $color.value
    let fontSize = $range.value
    let obj = {value,time,color,fontSize}
    canvasBarrage.add(obj)
}
$btn.addEventListener('click',send)