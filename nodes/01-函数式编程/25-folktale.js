//folktale 中的 compose 、 curry
const { compose ,curry} = require('folktale/core/lambda')
const {toUpper,first} = require('lodash/fp')

let f = curry(3,(x,y,z)=>{
    return x+y+z
})
console.log(f(1,2,3))  //6
console.log(f(1)(2)(3))  //6

let f1 = compose(toUpper,first)
console.log(f1(['one','two']))  //ONE

//folktale中的curry 比lodash 中的curry多传一个参数，第一个参数要传函数参数的个数
//folktale中的compose相当于lodash 中的flowRight