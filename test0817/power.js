/*
* 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
例如：arr = [5, 3, 7, 1]; 输出：[25, 9, 49, 1]
要求：不要使用for，while循环
* */
let arr = [5, 3, 7, 1];
function squareNumber(arr){
    return arr.map(function (item) {
        return item * item;
        
    })
}

console.log(squareNumber(arr));
console.log(arr);