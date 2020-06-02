//纯函数和不纯的函数
//概念：相同的输入永远会得到相同的输出，而且没有任何可观察的副作用
//纯函数就类似数学中的函数（用来描述输入和输出的关系），y=f(x)
//函数式编程不会保留计算中间的结果，所以变量是不可逆的（无状态）
//我们可以把一个函数的执行结果交给另一个函数去处理

//slice | splice
let arr = [1,2,3,4,5]

//纯函数slice
// console.log(arr.slice(0,3))
// console.log(arr.slice(0,3))
// console.log(arr.slice(0,3))
//[ 1, 2, 3 ]
//[ 1, 2, 3 ]
//[ 1, 2, 3 ]
//打印结果一样，相同输入、相同输出

//不纯的函数splice
console.log(arr.splice(0,3))
console.log(arr.splice(0,3))
console.log(arr.splice(0,3))
console.log(arr.splice(0,3))
console.log(arr.splice(0,3))
//[ 1, 2, 3 ]
//[ 4, 5 ]
//[]
//[]
//[]
//打印结果不一样，相同输入、不同输出
//splice会改变原数组，而slice不会改变原数组

//模拟一个纯函数
function sum(a,b){
    return a+b
}
console.log(sum(1,3))
console.log(sum(1,3))
console.log(sum(1,3))
//4
//4
//4
////打印结果一样，相同输入、相同输出，所以sum是纯函数