//模拟数组的方法map、every、some

//map ---- 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
const map = (arr,fn)=>{
    let result = []
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i]))
    }
    return result
}
const arr1 = [1,2,3,4,5]
const m = map(arr1,item=>item*item)
console.log(m)
//[ 1, 4, 9, 16, 25 ]

//every ---- 用于检测数组所有元素是否都符合指定条件（通过函数提供）
const every = (arr,fn) => {
    let flag = true
    for(let i=0;i<arr.length;i++){
        if(!fn(arr[i])){
            flag = false
            break
        }
    }
    return flag
}
const arr2 = [1,2,3,4,5,6]
const e = every(arr2,item => item<7)
console.log(e)
//true

//some ---- 用于检测数组是否有元素符合指定条件（通过函数提供）
const some = (arr,fn) => {
    let flag = false
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i])){
            flag = true
            break
        }
    }
    return flag
}
const arr3 = [1,3,4,6,8,9]
const s = some(arr3,item => item>10)
console.log(s)