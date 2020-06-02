//lodash 中的flowRight函数
//flowRight是从右到左执行(用的多一些)，flow是从左到右执行

const _ = require('lodash')

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()

const f = _.flowRight(toUpper,first,reverse)

console.log(f(['lbj','pyj','lmz']))   //LMZ