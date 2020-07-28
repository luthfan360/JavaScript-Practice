function kali(x, y) {
    x * y
}
function bagi(x, y) {
    x / y
} 

let hitung = function(no1, no2, op) {
    if (op == 'kali') {
    return kali(no1, no2)
    };
    if (op == 'bagi') {
    return bagi(no1, no2)
    };
}
console.log(hitung(2, 3, 'kali')); 