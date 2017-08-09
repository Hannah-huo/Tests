/*
* 体能大比拼题目(8.9/Wed)Round2
*
* 题目：查找斐波纳契数列中第 N 个数。

所谓的斐波纳契数列是指：
前2个数是 0 和 1 。
第 i 个数是第 i-1 个数和第i-2 个数的和。
斐波纳契数列的前10个数字是：
0, 1, 1, 2, 3, 5, 8, 13, 21, 34 …
* */
let n = prompt("查找斐波那契数列第N个数,请输入数字N:");
function getFab(n){
    let n1 = 0;
    let n2 = 1;

    let sum = 0;
    for(let i = 3; i <= n; i++){
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }

    return sum;
}

console.log(getFab(n));