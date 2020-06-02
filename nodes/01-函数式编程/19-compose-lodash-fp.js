//lodash 中的 fp 模块
//fp中提供了自动柯里化，函数优先，数据置后的方法|lodash中的方法都是数据优先，函数置后，两者是相反的
//这样有利于函数式友好编程

const fp = require('lodash/fp')

// const split = _.curry((sep,str) => _.split(str,sep))

// const join = _.curry((sep,array) => _.join(array,sep))

// const map = _.curry((fn,array) => _.map(array,fn))

// const f = _.flowRight(join('-'),trace('map after'),map(_.toLower),log,split(' '))
//把上述函数改造一下，
const f = fp.flowRight(fp.join('-'),fp.map(fp.toLower),fp.split(' '))
console.log(f('NEVER SAY DIE'))   //never-say-die    结果和上面一致


