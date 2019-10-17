//document  process  进程
const playerAction = process.argv[2];
console.log(playerAction);

if(playerAction!= 'rock'&&playerAction !='paper'
&& playerAction!= 'scissor'){
    throw new Error('出错了，再出过')
}
else{
    let computerAction;
    let random = Math.random()*3;
    console.log(Math.random());
    if(random<1){
        computerAction='rock';
        console.log('电脑出了石头')
    }
    else if (random>2){
        computerAction = 'scissor';
        console.log('电脑出了剪刀');
    }
    else{
        computerAction = 'paper';
        console.log('电脑出了布');
    }
    if(playerAction===computerAction){
        console.log('平局');
    }
    else if ((playerAction==='paper'&&computerAction=='rock')||(playerAction==='rock'&&computerAction==='scissor')||
    (playerAction==='scissor'&&computerAction==='paper')){
    
        console.log('你赢了');
    }
    else{
        console.log('你输了')
    }
}
