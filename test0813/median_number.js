/*
* 给定一个未排序的整数数组，找到其中位数。
function XXX(arr){}
* */
function medianNumber(arr){
    arr = arr.sort();
    let n = arr.length;
    if(n % 2 === 0){
        return ((arr[n/2 - 1] + arr[n / 2]) / 2);
    }
    else{
        return (arr[(n-1)/2]);
    }
}
let arr = [1,4,5,2];
console.log(medianNumber(arr));