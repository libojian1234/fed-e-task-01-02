//纯函数的好处
//可缓存--因为纯函数对相同的输入始终有相同的结果，所以可以把纯函数的结果缓存起来


//看一下lodash中的memoize函数
const _ = require('lodash')

function getAear(r){
    console.log('是否调用？')
    return Math.PI*r*r
}
let getAearWithMemoize = _.memoize(getAear)
console.log(getAearWithMemoize(3))
console.log(getAearWithMemoize(3))
console.log(getAearWithMemoize(3))
console.log(getAearWithMemoize(3))
console.log(getAearWithMemoize(4))
//是否调用？
//28.274333882308138
//28.274333882308138
//28.274333882308138
//28.274333882308138
//是否调用？
//50.26548245743669
//可以看到调用getAearWithMemoize函数只打印了2次‘是否调用？’,
//说明memoize把3的结果缓存起来了,再次传3的时候没有进行计算，传4的时候才进行计算，大大提高了效率


//下面我们来模拟一下lodash的memoize函数

function memoize(fn){
    let cache = {}
    return function(){
        let str = JSON.stringify(arguments)
        cache[str] = cache[str] || fn.apply(fn,arguments)
        return cache[str]
    }
}
let getAearWithMemoize1 = memoize(getAear)
console.log(getAearWithMemoize1(3))
console.log(getAearWithMemoize1(3))
console.log(getAearWithMemoize1(3))
console.log(getAearWithMemoize1(3))
console.log(getAearWithMemoize1(4))