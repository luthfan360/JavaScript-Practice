// callback function is basically calling other function within a function

let x = function () {
console.log('Hai ini X!');
};
    
let y = function (callback) {
console.log('Halo ini Y!');
callback();
};
    
y(x);


//the one below is the arrow version

let x = () => {
console.log('Hai ini X!');
};

let y = (callback) => {
console.log('Halo ini Y!');
callback();
};

y(x);


// here's another one

let kali = (x, y) => x * y;
let bagi = (x, y) => x / y;
let hitung = (no1, no2, op) => op(no1, no2);

console.log(hitung(2, 3, kali));

// written below is the one without arrow function

let hitung = function(no1, no2, op) {
    if (op == 'kali') {
    return no1*no2
    };
    if (op == 'bagi') {
    return no1/no2
    };

    console.log(hitung(2, 3, 'kali')); 
}