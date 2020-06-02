const fp = require('lodash/fp')

//数据
//horsepower 马力，dollar_value 价格，in_stock 库存
const cars = [
    {
        name: "Ferrari FF",
        horsepower: 660,
        dollar_value: 700000,
        in_stock: true
    },
    {
        name: "Spyker C12 Zagato",
        horsepower: 650,
        dollar_value: 64800,
        in_stock: false
    },
    {
        name: "Jaguar XKR-S",
        horsepower: 550,
        dollar_value: 132000,
        in_stock: false
    },
    {
        name: "Audi R8",
        horsepower: 525,
        dollar_value: 114200,
        in_stock: false
    },
    {
        name: "Aston Martin One-77",
        horsepower: 750,
        dollar_value: 1850000,
        in_stock: true
    },
    {
        name: "Pagani Huayra",
        horsepower: 700,
        dollar_value: 1300000,
        in_stock: false
    }
]
//-----------------------------------
// let isLastInStock = function(cars){
//     //获取最后一条数据
//     let last_car = fp.last(cars)
//     //获取最后一条数据的 in_stock 属性值
//     return fp.prop('in_stock',last_car)
// }
// console.log(isLastInStock(cars))

// let isLastInStock = fp.flowRight(fp.prop('in_stock'),fp.last)
// console.log(isLastInStock(cars))
//----------------
//fp.flowRight()、fp.prop()、fp.first()
// let getFirstCarName = fp.flowRight(fp.prop('name'),fp.first)
// console.log(getFirstCarName(cars))
//-----------------------------------
// let _average = function(xs) {
//     return fp.reduce(fp.add,0,xs)/xs.length
// }
// let averageDollarValue = function (cars) {
//     let dollar_values = fp.map(function(car){
//         return car.dollar_value
//     },cars)
//     return _average(dollar_values)
// }

// console.log(averageDollarValue(cars))
//------------------
// let averageDollarValue = fp.flowRight(_average,fp.map(car => car.dollar_value))
// console.log(averageDollarValue(cars))
//-----------------------------------

let _underscore = fp.replace(/\w+/g,'_')
let firstChar = function(str){
    let a = str.charAt(0); 
    let b = a.toUpperCase();
    return b + str.slice(1);
}
let arr = ["Hello World"]

let sanitizeNames = fp.flowRight(fp.map(fp.flowRight(fp.join('_'),fp.map(firstChar),fp.split(' '))))
console.log(sanitizeNames(arr))
