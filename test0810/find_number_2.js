function findNum(arr){
    let aryMap = {};
    for(let i of arr){
        aryMap[i] = aryMap[i]?aryMap[i]+1:1;
    }

    for(let k of Object.keys(aryMap)){
        if(aryMap[k] == 1){
            //return k;
            console.log(k);
        }
    }
}

findNum([1,2,3,4,5,6,1,2,3,4,5]);