/*
* 题目：找出数组 arr 中重复出现过的元素
例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
*
* */
function getDuplicates(arr) {
    let result = [];
    arr.concat()
        .sort()
        .sort(function(a,b){
            if(a === b && result.indexOf(a) === -1){
                result.push(a);
            }
        });
    return result;
}

console.log(getDuplicates(['a','ab','ed','da','a','ed','b']));