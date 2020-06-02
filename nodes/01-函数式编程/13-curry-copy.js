//模拟curry方法
function getSum(a, b, c){
    return a+b+c
}
debugger
const curried = curry(getSum)

console.log(curried(1,2,3))   //6
console.log(curried(1)(2,3))   //6
console.log(curried(1)(2)(3))   //6

function curry(fn){
    return function curriedFn(...args){
        if(args.length < fn.length){
            return function(){
                return curriedFn(...args.concat(Array.from(arguments)))
            }
        }
        return fn(...args)
    }
}


//总结柯里化：
//柯里化可以让我们给一个函数传递较少的参数，得到一个已经记住了某些固定参数的新函数
//这是一种对函数参数的缓存
//让函数变的更灵活，让函数的颗粒度更小
//可以把多元函数转换成一元函数，可以组合使用函数产生强大的功能