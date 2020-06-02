const fp = require('lodash/fp')
const {Maybe,Container} = require('./work2-support')

// let maybe = Maybe.of([5,6,1])
// let ex1 = maybe.map(fp.map(fp.add(1)))

// let xs = Container.of(['do','ray','me','fa','so','la','ti','do'])
// let ex2 = xs.map(fp.first)._value
// console.log(ex2)

// let safeProp = fp.curry(function(x,o){
//     return Maybe.of(o[x])
// })
// let user = {id:2,name:"Albert"}


// let ex3 = safeProp('name')(user).map(fp.first)._value

let ex4 = function(n){
    if(n){
        return parseInt(n)
    }
}

// let maybe = Maybe.of(n)
let ex5 = Maybe.of(null).map(parseInt)
console.log(ex5)