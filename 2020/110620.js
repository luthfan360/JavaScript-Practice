var x = 40
var y = 20

var z = x + y

// console.log(z)
// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x % y)

//PI 
console.log(Math.PI)

//Power atau Pangkat
console.log(Math.pow(8,2))

//Square Root atau Akar Pangkat 2
console.log(Math.sqrt(64))

//Cube Root atau Akar Pangkat 3
console.log(Math.cbrt(8))

//Pembulatan Angka Normal
console.log(Math.round(3.6))

//Pembulatan ke Atas atau Ceiling
console.log(Math.ceil(4.2))

//Pembulatan ke Bawah atau Floor
console.log(Math.floor(5.8))

//Angka Acak atau Random
console.log(Math.random())
var a = Math.round(Math.random() * 100)
console.log(a)

//Angka Max dan Min
console.log(Math.max(1,3,5))
console.log(Math.min(1,3,5))

//Function Waktu
let waktu = new Date()
console.log(waktu)

console.log(waktu.getDay())
console.log(waktu.getDate())
console.log(waktu.getMonth())
console.log(waktu.getFullYear())
console.log(waktu.getHours())
console.log(waktu.getMinutes())
console.log(waktu.getSeconds())

var tanggal = (waktu.getDate())
var bulan = (waktu.getMonth())
var tahun = (waktu.getFullYear())
var tanggalFull = tanggal + "/" + (bulan + 1) + "/" + tahun
console.log(tanggalFull)

var jam = (waktu.getHours())
var menit = (waktu.getMinutes())
var detik = (waktu.getSeconds())
var jamFull = jam + ":" + menit + ":" + detik
console.log(jamFull)

