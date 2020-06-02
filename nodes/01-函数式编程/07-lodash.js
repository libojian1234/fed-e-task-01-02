//演示lodash
//first | last | toUpper | reverse | each | includes | find | findIndex

const _ = require('lodash')

const arr = ['lbj','pyj','lxl','lmz']

console.log(_.first(arr))  //lbj
console.log(_.last(arr))   //lmz
console.log(_.toUpper(_.first(arr))) //LBJ
console.log(_.reverse(arr)) //[ 'lmz', 'lxl', 'pyj', 'lbj' ]
console.log(arr)  //[ 'lmz', 'lxl', 'pyj', 'lbj' ]
const r = _.each(arr,(item,index)=>{
    console.log(item,index)
})
console.log(r)
//lmz 0
//lxl 1
//pyj 2
//lbj 3
//[ 'lmz', 'lxl', 'pyj', 'lbj' ]

console.log(_.includes(arr,'lmz'))  //true
console.log(arr)   //[ 'lmz', 'lxl', 'pyj', 'lbj' ]
console.log(_.find(arr,o=>o=='lbj'))  //lbj
console.log(_.findIndex(arr,o=>o=='lbj'))  //3