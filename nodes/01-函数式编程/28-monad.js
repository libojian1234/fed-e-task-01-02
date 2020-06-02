//Monad 函子是可以变扁的Pointed函子，IO(IO(x))
//一个函子如果具有join 和of 两个方法并遵守一些定律就是一个Monad
const fs = require('fs')
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
    join(){                     //执行函子
        return this._value()           
    }
    flatMap(fn){
        return this.map(fn).join()
    }
}

let readFile = function(filename){
    return new IO(function(){
        return fs.readFileSync(filename,'utf-8')
    })
}
let print = function(x){
    return new IO(function(){
        console.log(x)
        return x
    })
}

let r = readFile('package.json')
    .map(fp.toUpper)
    .flatMap(print)     //这里返回的就是print的IO函子，它读取了fs.readFileSync(filename,'utf-8')，把值缓存在了x中，要的到内容，调用join方法就行了
    .join()              

