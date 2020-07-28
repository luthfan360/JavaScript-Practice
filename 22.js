//multiply the array elements by 2

var a = [1,2,3,4,5,6];

//array mapping version

multiply = (x) => {
    return x.map((val) => val * 2); 
}
console.log(multiply(a))

//for loop version

multiloop = (x,op) => {
    let z = [];
    for (i = 0; i < x.length; i++) {
        if (op == 'k2') {
            z.push(x[i] * 2);
        }
        else if (op == 'k3') {
            z.push(x[i] * 3);
        }
    }
    return z;
}
console.log(multiloop(a,'k3'))

//for loop version with callback

multiloop = (x,op) => {
    let z = [];
    for (i = 0; i < x.length; i++) {
        var y = op(x[i]);
        z.push(y);
    }
    return z;
}
kaliDua = (x) => {
    return x * 2;
}
console.log(multiloop(a,kaliDua))


//filter out 

select = (x) => {
    return x.filter((val) => (
        val % 2 == 0));
}
console.log(select(a))

//for loop version

selectLoop = (x) => {
    let z = [];
    for (i = 0; i < x.length; i++) {
        if (x[i] % 2 == 0) {
            z.push(x[i]);
        }
        else {
        }
    }
return z;
}
console.log(selectLoop(a))

//for loop with callback

selectCall = (x,fn) => {
    let out = [];
    for (i = 0; i < x.length; i++) {
        if (fn(x[i])) {
            out.push(x[i]);
        }
    }
return out
}
function justEven(x) {
    return x % 2 == 0;
}

function justOdd(x) {
    return x % 2 == 1;
}
console.log(selectCall(a,justOdd))