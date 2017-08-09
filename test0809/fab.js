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