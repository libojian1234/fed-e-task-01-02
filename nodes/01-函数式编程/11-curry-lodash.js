//lodash 中的 curry 的基本使用
const _ = require('lodash')

function getSum(a, b, c){
    return a+b+c
}
const curried = _.curry(getSum)

console.log(curried(1,2,3))   //6
console.log(curried(1)(2,3))   //6
console.log(curried(1)(2)(3))   //6
//这样的话，我们就能把一个多个参数的函数分解，参数想怎么传就怎么传