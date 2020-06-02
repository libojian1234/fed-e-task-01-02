//柯里化演示

//这个函数纯在硬编码
// function checkAge(age){
//     let min min = 18;
//     return age>=18
// }

//改造一下、普通的纯函数
// function checkAge(min,age){
//     return age>=min
// }

// console.log(checkAge(18,20))
// console.log(checkAge(18,24))
// console.log(checkAge(20,24))

//在改造一下、（因为上面的函数第一个参数min同时为18时，每次都要传，这样的话每次要传2个值）
//下面就是函数的柯里化
// function checkAge(min){
//     return function(age){
//         return age>=min
//     }
// }
//ES6写法
const checkAge = min =>(age => age >= min)  //这两个一样的效果
// const checkAge = (min) =>((age) => age >= min)

let checkAge18 = checkAge(18)
let checkAge20 = checkAge(20)

console.log(checkAge18(15))
console.log(checkAge20(30))

//柯里化：
//当一个函数有多个参数时，我们可以对这个函数进行改造，可以调用一个函数，只传递部分函数(这部分以后永远不变)，
//然后让这个函数返回一个新的函数，这个新的传递去接收剩余的参数，并且返回我们想要的结果，这就是函数的柯里化