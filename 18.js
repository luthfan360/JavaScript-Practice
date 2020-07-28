// let operIndex = arrOut.indexOf('+');
// let int1 = arrOut.slice(0,operIndex);
// let oper = arrOut[operIndex];
// let int2 = arrOut.slice(operIndex,operIndex+1);
// let sum = 0;

// console.log(arrOut);
// console.log(parseInt(int1));
// console.log(parseInt(oper));
// console.log(operIndex);
// console.log(parseInt(int2));

// let out = `${int1}${oper}${int2}`;
// console.log(`${out}`);

// var plus = function() {
//     let addition = int2 + int2;
//     document.getElementById('output').innerHTML = addition;
// }

let arrOut = [1, 2, 3, 4];

function parser() {
    let output = 0;
    arrOut.reverse();
    for (i = 0; i < arrOut.length; i++) {
    let multiplier = Math.pow(10,i);
    let units = multiplier * arrOut[i];
    output += units;
    }
    return output;
}
console.log(parser());
