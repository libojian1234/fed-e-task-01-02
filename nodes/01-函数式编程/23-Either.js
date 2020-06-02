//Either函子
//Either 两者中的任何一个，类似于if...else...的处理
//异常会让函数变的不纯，Either函子可以用来做异常处理

class Left {
    static of(value){
        return new Left(value)
    }
    constructor(value){
        this._value = value
    }
    map(fn){
        return this
    }
}

class Right {
    static of(value){
        return new Right(value)
    }
    constructor(value){
        this._value = value
    }
    map(fn){
        return Right.of(fn(this._value))
    }
}

// let r1 = Right.of(12).map(x => x+2)
// let r2 = Left.of(12).map(x => x+2)
// console.log(r1)  //Right { _value: 14 }
// console.log(r2)  //Left { _value: 12 }

function parseJSON (str){
    try{
        return Right.of(JSON.parse(str))
    }catch(e){
        return Left.of({error:e.message})
    }
}

let r3 = parseJSON('{name:lbj}')
console.log(r3)  //Left { _value: { error: 'Unexpected token n in JSON at position 1' } }

let r4 = parseJSON('{"name":"lbj"}')
console.log(r4)   //Right { _value: { name: 'lbj' } }

let r5 = parseJSON('{"name":"lbj"}').map(x => x.name.toUpperCase())
console.log(r5)   //Right { _value: 'LBJ' }

//总结：Either函子就是定义两个函子，一个做正确的处理，一个做异常处理，返回的都是函子