/*
* 题目：给出2*n + 1 个的数字(数组)，除其中一个数字之外其他每个数字均出现两次，找到这个数字。
* */
let result = [];
function findNum(arr){
    for(let i = 0; i < arr.length; i ++){
        result = result ^ arr[i];
    }
    console.log(result);
    //return result;
}

findNum([1,2,3,4,5,1,2,3,4,66,5]);