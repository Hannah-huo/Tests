/*
 * 判断一个字符串中出现次数最多的字符，并统计次数
例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}
  * */

function findMaxTimes(str) {
    let result = {};
    let obj = {};
    for(let i = 0;i < str.length;i ++){
        let key = str[i];
        if(obj[key]){
            obj[key]++;
        }else{
            obj[key]=1;
        }
    }

    let maxTimes=0;
    for(let key in obj){
        if(maxTimes <= obj[key]){
            maxTimes = obj[key];
        }
    }

    for(let key in obj){
        if(obj[key] === maxTimes){
            result[key] = maxTimes;
        }
    }
    return result;
}

console.log(findMaxTimes('abcsbaddbizdbas'));
console.log(findMaxTimes('aaaaabbdbdbb'));

