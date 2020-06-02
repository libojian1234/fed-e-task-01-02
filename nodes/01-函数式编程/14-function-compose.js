//函数组合
//函数组合（conpose）：如果一个函数要经过多个函数处理才能得到最终值，这个时候可以把中间过程的函数合并成一个函数
//函数就像是数据的管道，函数组合就是把这些管道连接起来，让数据穿过多个管道形成最终结果
//函数组合默认是从右到左执行

//函数组合演示
function compose(f,g){
    return function(value){
        return f(g(value))
    }
}

function reverse(arr){
    return arr.reverse()
}

function first(arr){
    return arr[0]
}

const last = compose(first,reverse)

console.log(last([1,2,3,4]))
