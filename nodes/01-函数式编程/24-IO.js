//IO函子
//IO函子中的_value是 一个函数，这里是把函数作为值来处理
//IO函子可以把不纯的动作存储到_value中，延迟执行这个不纯的函数（惰性执行），包装当前的操作，当前的操作是一个纯操作
//把不纯的操作交给调用者来处理

const fp = require('lodash/fp')
class IO {
    static of(value){
        return new IO(function(){
            return value
        })
    }
    constructor(fn){
        this._value = fn
    }
    map(fn){
        return new IO(fp.flowRight(fn,this._value))
    }
}

//调用
let r = IO.of(process).map(p => p.execPath)
console.log(r)  //IO { _value: [Function] }
console.log(r._value())  //E:\软件\node\node.exe

//总结：相当于把不存的函数存到_value中，最后由调用者处理