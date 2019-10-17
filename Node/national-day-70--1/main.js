const program = require('commander')
const mergeAction = (options)=>{
    
}
//merge功能
program.command('merge')
       .description('合并图片')
       .option('-b,--background <background image>','背景图片')
       .option('-f,--flag <flag image>','国旗图片')
       .option('-t,--target <target img name>','合成图片')
       .action(mergeAction)

       program.parse(process.argv)