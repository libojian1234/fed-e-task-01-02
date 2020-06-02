//函数组合  调试
//NEVER SAY DIE --> never say die

const _ = require('lodash')

const log = v => {
    console.log(v)
    return v
}

const trace = _.curry((tag,v) => {
    console.log(tag,v)
    return v
})

//_.split 第一个参数传入字符串，第二个参数传入分隔符，我们需要吧它改造一下，用curry函数，第一个参数传分隔符，第二个参数传字符串
const split = _.curry((sep,str) => _.split(str,sep))

const join = _.curry((sep,array) => _.join(array,sep))

const map = _.curry((fn,array) => _.map(array,fn))

const f = _.flowRight(join('-'),trace('map after'),map(_.toLower),log,split(' '))

console.log(f('NEVER SAY DIE'))
