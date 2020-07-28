var w = [0,1,2,3,4,5]
var x = w.filter((val) => val !== 2);
var y = w.filter((val) => val % 2 == 0);
var z = w.filter((val) => val % 2 !== 0);
console.log(x);
console.log(y);
console.log(z);