//filter stuff out of your array with Array Filtering

var w = [0,1,2,3,4,5]
var x = w.filter((val) => val !== 2);
var y = w.filter((val) => val % 2 == 0);
var z = w.filter((val) => val % 2 !== 0);

console.log(x);
console.log(y);
console.log(z);

//Array Mapping is a way to modify array value

var w = [1,4,9,16,25]
var x = w.map(Math.sqrt);
var y = w.map((val)=> val * 2);
var z = w.map((val)=> val !== 9);

console.log(x);
console.log(y);
console.log(z);

//here's another use of Array Mapping

var orang = [
{nama : "Andi", marga: "Hasibuan"},
{nama : "Budi", marga: "Sinaga"},
{nama : "Caca", marga: "Pasaribu"}
];

function namaLengkap(item, index) {
var fullname = [item.nama,item.marga].join(" ");
return fullname;
}

function tesMap() {
console.log(orang.map(namaLengkap));
console.log(orang.map(namaLengkap)[0]);
console.log(orang.map(namaLengkap)[1]);
console.log(orang.map(namaLengkap)[2]);
}
tesMap();