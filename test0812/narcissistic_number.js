/*
* 题目: 打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。
* 例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。
* */
let result = [];
function narcissisticNumber(){
    for(let i = 100; i <= 999; i ++){
        let g = i % 10;
        let s = Math.floor(( i / 10) % 10);
        let b = Math.floor(i / 100);
        if(i === g*g*g + s*s*s + b*b*b){
            result.push(i);
        }
    }

    return result;

}
console.log(narcissisticNumber());
