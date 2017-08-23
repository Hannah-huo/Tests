/*
*给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组。
给定 [1,2,[1,2]]，返回 [1,2,1,2]。

给定 [1,2,[1,2],[3,4]]，返回 [1,2,1,2,3,4]。
给定 [4,[3,[2,[1]]]]，返回 [4,3,2,1]。
*
* */
let result = [];
function getNumbers(ary){
    ary.forEach(e => {
        if(typeof(e) === 'number'){
            result.push(e)
        }else{
            getNumbers(e)
        }
    })
    return result
}

console.log(getNumbers([1,2,[1,2],[3,4]]));
//console.log(getNumbers([4,[3,[2,[1]]]]));
