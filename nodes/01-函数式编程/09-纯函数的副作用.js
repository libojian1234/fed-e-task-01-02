//函数式编程的副作用
//纯函数：对于相同的输入永远会得到相同的输出，而且没有任何可观察的副作用

//不纯的（当外部的mini变化了，就不是相同的输入会得到相同的输出了，所以不纯）
let mini = 18
function checkage(age){
    return age>=mini
}
//为了让上述函数变成纯的，就把mini定义在函数内，函数就变成纯的了，如下
//纯的（有硬编码，后续可以通过柯里化解决）硬编码就是函数内有固定的值age = 18
function checkage(){
    let mini = 18
    return age>=mini
}

//副作用让一个函数变的不纯（如上例），纯函数根据相同的输入返回相同的输出，如果函数依赖于外部的状态就无法保证输出相同，就会带来副作用
//副作用来源：配置文件、数据库、获取用户的输入等等
//所有的外部交互都有可能带来副作用，副作用也使得方法通用性下降，不适合扩展和可重用性，同时副作用会给程序中带来安全隐患，给程序带来不确定性，但是副作用不可能完全禁止，只能尽可能控制他们在可控范围内发生