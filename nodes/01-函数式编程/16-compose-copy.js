//模拟lodash中的flowRight

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()


//reduce:对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。以下是他的四个参数
//1.Accumulator (acc) (累计器)
//2.Current Value (cur) (当前值)
//3.Current Index (idx) (当前索引)
//4.Source Array (src) (源数组)
// function compose(...args){
//     return function(value){
//         return args.reverse().reduce(function(acc,fn){
//             return fn(acc)
//         },value)
//     }
// }

const compose = (...args) => value => args.reverse().reduce((acc,fn) => fn(acc),value)   //用箭头函数可以简化代码

const f = compose(toUpper,first,reverse)
console.log(f(['one','two','three']))   //THREE