var result = [];

var factor = function f(n) {
    if (n == 1) {
        return;
    }

    var v = n;
    while (v > 1) {
        if (isPrime(v) && n % v == 0) {
            break;
        }
        v--;
    }


    if (v == 1) { return; }
    result.push(v);
    f(n / v);
}

function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}


function main(n){
    let finalResult = '';
    finalResult += n+'='
    factor(n);
    for(var i= (result.length - 1); i>=0; i--){
        finalResult+=result[i];
    }
    console.log(finalResult);
}
main(90)
