//柯里化案例

const _ = require('lodash')

const match = _.curry(function(reg,str){
    return str.match(reg)
})
const haveSpace = match(/\s+/g)
const haveNum = match(/\d+/g)

console.log(haveSpace('hello world'))  //[ ' ' ]
console.log(haveNum('123sdfsdg'))    //[ '123' ]

const filter = _.curry(function(fn,arr){
    return arr.filter(fn)
})

console.log(filter(haveSpace,['str sdf','lbj_ashj']))  //[ 'str sdf' ]

const findSpace = filter(haveSpace)
console.log(findSpace(['str sdf','lbj_ashj']))  //[ 'str sdf' ]

//总结：柯里化感觉相当于把多参数函数分解，虽然前期定义的函数多一些，但是后期调用起来方便多了，函数复用性更强