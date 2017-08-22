/*
* 题目：

计算两个数组的交数组

注意：理解题意（不是找出在两数组中都存在的元素）
例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].
* */

function getCrossArr(arr1, arr2){
    let result = [];
    arr1.forEach(e => {
        if(arr2.find(r => r === e)){
            result.push(e);
        }
    })
    return result;
}

console.log(getCrossArr([1, 2, 2, 1],[2, 2]));
