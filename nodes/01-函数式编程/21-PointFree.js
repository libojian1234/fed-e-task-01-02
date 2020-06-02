//PointFree
//我们可以把数据处理的过程定义成与数据无关的合成运算，不需要用到代表数据的那个参数,只要把简单的运算步骤合成到一起，在使用这种方法模式之前我们需要定义一些辅助的基本运算函数
//1.不需要致命处理的数据
//2.只需要合成运算过程
//3，需要定义一些辅助的基本运算函数

//理解：函数式编程的核心是把运算过程抽象成函数，PointFree是把抽象出来的函数再合成函数（这个合成的过程其实就是一个抽象的过程），两者都不需要关心数据


//Hello    World  => hello world
const fp = require('lodash/fp')

const f = fp.flowRight(fp.replace(/\s+/g,'_'),fp.toLower)

console.log(f('Hello    World'))  //hello_world

//world wild web => W. W. W
const f1 = fp.flowRight(fp.join('. '),fp.map(fp.first),fp.map(fp.toUpper),fp.split(' '))
const f2 = fp.flowRight(fp.join('. '),fp.map(fp.flowRight(fp.first,fp.toUpper)),fp.split(' '))
const f3 = fp.flowRight(fp.join('. '),fp.map(fp.flowRight(fp.toUpper,fp.first)),fp.split(' '))
console.log(f1('world wild web'))  //W. W. W
console.log(f2('world wild web'))  //W. W. W
console.log(f3('world wild web'))  //W. W. W