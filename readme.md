## 简答题
### 1. 描述引用计数的工作原理和优缺点
#### 工作原理
> 核心思想：计数引用数，判断当前引用数是否为0
- 引用计数器
- 引用关系改变时修改引用数字
- 引用数字为0时立即回收
#### 引用计数算法的优点
- 发现垃圾时立即回收
- 最大限度减少程序暂停（当内存要爆满时，引用计数会立即找到引用计数为0的对象空间，对其进行释放）
#### 引用计数算法的缺点
- 无法回收循环引用的对象

### 2. 描述标记整理算法的工作流程
- 遍历所有对象找标记活动对象
- 遍历所有对象清除没有标记的对象
- 回收相应的空间（放入当前的空闲链表中，方便程序利用）
- 清除阶段会先执行整理，移动对象位置（这样就可以得到连续的空间地址，不会导致空间的碎片化）

### 3. 描述V8中新生代存储区垃圾回收的流程
- 回收过程采用复制算法 + 标记整理
- 新生代内存区分为2个等大小的空间（使用空间为From，空闲空间为To）
- 活动对象存储于From空间
- 标记整理后将活动对象拷贝至To
- From与To交换空间完成释放（先释放From，然后From和To交换）

### 3. 描述增量标记算法在何时使用及工作原理
> 在老年代对象回收的最后，会采用增量标记进行效率的优化
#### 工作原理
> 增量标记就是将一整段的垃圾回收操作拆分成很多小步，组合着去完成当前的垃圾回收,让程序执行和垃圾回收交替进行，避免了程序长时间的等待垃圾回收完成，给客户的感官好一些。

## 代码题1
### 基于以下代码完成下面的四个练习
````javascript
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
````
### 练习1
#### 使用函数组合fp.flowRight()重新实现下面这个函数
````javascript
let isLastInStock = function(cars){
    //获取最后一条数据
    let last_car = fp.last(cars)
    //获取最后一条数据的 in_stock 属性值
    return fp.prop('in_stock',last_car)
}
````
````javascript
let isLastInStock = fp.flowRight(fp.prop('in_stock'),fp.last)
````
### 练习2
#### 使用fp.flowRight()、fp.prop()、fp.first()获取第一个car的name
````javascript
const fp = require('lodash/fp')
let getFirstCarName = fp.flowRight(fp.prop('name'),fp.first)
const firstCarName = getFirstCarName(cars)
````
### 练习3
#### 使用帮助函数_average重构averageDollarValue,使用函数组合的方式实现
````javascript
const fp = require('lodash/fp')
let _average = function(xs) {
    return fp.reduce(fp.add,0,xs)/xs.length
}
let averageDollarValue = function (cars) {
    let dollar_values = fp.map(function(car){
        return car.dollar_value
    },cars)
    return _average(dollar_values)
}
````
````javascript
const fp = require('lodash/fp')
let _average = function(xs) {
    return fp.reduce(fp.add,0,xs)/xs.length
}
let averageDollarValue = fp.flowRight(_average,fp.map(car => car.dollar_value))
````
### 练习4
#### 使用flowRight写一个sanitizeNames()函数，返回一个下划线连接的小写字符串，把数组中的name转换为这种形式：例如：sanitizeNames(["Hello World"])=>["hello_world"]
````javascript
let _underscore = fp.replace(/\w+/g,'_')
let firstChar = function(str){
    let a = str.charAt(0); 
    let b = a.toUpperCase();
    return b + str.slice(1);
}
let arr = ["Hello World"]
let sanitizeNames = fp.flowRight(fp.map(fp.flowRight(fp.join('_'),fp.map(firstChar),fp.split(' '))))
console.log(sanitizeNames(arr))
````
## 代码题2
### 基于下面提供的代码，完成后续的四个练习
````javascript
//support.js
class Container {
    static of (value) {
        return new Container(value)
    }
    constructor (value) {
        this._value = value
    }
    map (fn) {
        return Container.of(fn(this._value))
    }
}

class Maybe {
    static of (x) {
        return new Maybe(x)
    }
    isNothing () {
        return this._value === null || this._value === undefined
    }
    constructor (x) {
        this._value = x
    }
    map (fn) {
        return this.isNothing()?this:Maybe.of(fn(this._value))
    }
}

module.exports = {
    Maybe,
    Container
}
````
### 练习1
#### 使用fp.add(x,y)和fp.map(f,x)创建一个能让functor里的值增加的函数ex1
````javascript
const fp = require('lodash/fp')
const {Maybe,Container} = require('./work2-support')

let maybe = Maybe.of([5,6,1])
let ex1 = maybe.map(fp.map(fp.add(1)))
````
### 练习2
#### 实现一个函数ex2，能够使用fp.first获取列表的第一个元素
````javascript
const fp = require('lodash/fp')
const {Maybe,Container} = require('./work2-support')

let xs = Container.of(['do','ray','me','fa','so','la','ti','do'])
let ex2 = xs.map(fp.first)._value
````

### 练习3
#### 实现一个函数ex3，使用safeProp 和fp.first 找到user的名字的首字母
````javascript
const fp = require('lodash/fp')
const {Maybe,Container} = require('./work2-support')

let safeProp = fp.curry(function(x,o){
    return Maybe.of(o[x])
})
let user = {id:2,name:"Albert"}
let ex3 = 
````
### 练习4
#### 使用Maybe重写ex4，不要有if语句
````javascript
const fp = require('lodash/fp')
const {Maybe,Container} = require('./work2-support')

let ex4 = function(n){
    if(n){
        return parseInt(n)
    }
}

````
> 练习3、练习4暂时不会