/*
* 将数组中所包含的某个元素找出，并放在数组后面
给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].

function XXX(arr,elem){ }

参数：
arr:数组
elem:某个元素
* */

function setLastNumber(arr, elem){
    let result = [];
    arr.forEach((e, index) => {
        if(e === elem){
            arr.splice(index,1);
            result.push(e);
        }
    })
    return arr.concat(result);
}

console.log(setLastNumber([0,1,0,3,12],0))