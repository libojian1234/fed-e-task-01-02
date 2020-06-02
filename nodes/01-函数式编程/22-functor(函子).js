//Functor(函子)
//为什么要学函子：到目前为止已经学习了函数式编程的一些基础，但是我们还没有演示在函数式编程中如何把副作用控制在可控的范围内、异常处理、异步处理

//什么是Functor
//容器：包含值和值的变形关系（这个变形关系就是函数）
//函子：是一个特殊的容器，通过一个普通的对象来实现，该对象具有map方法，map方法可以运行一个函数来对值进行处理（变形关系）

class Container {
    constructor(value){
        this._value = value
    }
    map(fn){
        return new Container(fn(this._value))
    }
}

let r = new Container(5)
    .map(x => x+1)
    .map(x => x*x)
console.log(r)
//Container { _value: 36 }  最终得到的是一个新的函子对象

//改造一下
class Container1 {
    static of(value){
        return new Container(value)
    }
    constructor(value){
        this._value = value
    }
    map(fn){
        return Container1.of(fn(this._value))
    }
}

let r1 = Container1.of(5)
    .map(x => x+2)
    .map(x => x*x)
console.log(r1)
//Container { _value: 49 }


//总结：
//1.函数式编程的运算不直接操作值，而是由函子完成
//2.函子就是一个实现了map契约的对象
//3.我们可以把函子想象成一个盒子，这个盒子里封装了一个值
//4.想要处理盒子中的值，我们需要给盒子的map方法传递一个处理值的函数（纯函数），由这个函数来对值进行处理
//5.最终map方法返回一个包含新值的盒子（函子）

//演示null undefined 的问题
//传 null undefined 会报错
// let r2 = Container1.of(undefined)
//     .map(x => x.toUpperCase())   

//所以我们用一个MayBe的函子
class MayBe {
    static of(value){
        return new MayBe(value)
    }
    constructor(value){
        this._value = value
    }
    map(fn){
        return this.isNothing ? MayBe.of(null) : MayBe.of(fn(this._value))
    }
    isNothing(){
        return this._value === null || this._value ===undefined
    }
}

let r2 = MayBe.of(null)
    .map(x => x+2)
    .map(x => x*x)
console.log(r2)
//MayBe { _value: null }
//MayBe函子只能返回null，不能清晰的定位是哪里除了问题，下面我们要用到Either函子