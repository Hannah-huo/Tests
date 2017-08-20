/*
* 数组去重
例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]
* */

function uniqueArr(arr){
    let n = [];
    for(let i = 0; i < arr.length; i++){
        if (n.indexOf(arr[i]) === -1) {
            n.push(arr[i]);
        }
    }
    return n;
}

console.log(uniqueArr(['s','a','s','b','a',1,'1',1]));