//lodash 和 lodash/fp 模块中map 方法的区别

const _ = require('lodash')
console.log(_.map(['23','112','10'],parseInt))
//[ 23, NaN, 2 ]
//map传递的有三个参数 (value, index|key, collection)
//parseInt('23',0,['23','112','10'])
//parseInt('112',1,['23','112','10'])
//parseInt('10',2,['23','112','10'])
//这三个参数传到parseInt里面，parseInt里面有两个参数(s: string, radix?: number)，第二个参数代表是几进制
//23的十进制为23，没有1进制，2的2进制为10，所以说会打印上面的结果


const fp = require('lodash/fp')
console.log(fp.map(parseInt,['23','112','10']))
//[ 23, 112, 10 ]
//fp的map方法是函数优先，数据置后，map只传一个参数的时候，接收的是一个函数


// const f = fp.map(parseInt)  这样写和上面是一样的
// console.log(f(['23','112','10']))

