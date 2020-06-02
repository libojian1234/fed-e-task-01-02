//高阶函数-函数作为返回值

//------------------------------
// const makeFn = function(){
//     const msg = 'Hello World'
//     return function(){
//         console.log(msg)
//     }
// }
// const fn = makeFn()
// fn()

// makeFn()()
//---------------------------------

//模拟once函数，多次调用，只执行一次（应用场景：支付的时候，只能支付一次）
function once(fn){
    let done = false;
    return function(){
        if(!done){
            done = true;    
            fn.apply(this,arguments)
        }
    }
    
}
const pay = once(function(money){
    console.log(money)
})
pay(5)
pay(5)
pay(5)
pay(5)