//高阶函数-函数作为参数

//模拟forEach方法
function forEach(arr,fn){
    for ( let i=0;i<arr.length;i++ ){
        fn(arr[i])
    }
}
let arr = [1,2,3,4,5,6]
forEach(arr,function(item){
    console.log(item);
})
//1,2,3,4,5,6


//模拟filter的方法
function filter(arr,fn){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
let arr1 = [1,2,3,4,5,6,7,8]
let results = filter(arr1,function(item){
    return item%2
})
console.log(results)
//[1,3,5,7]