var x = "Halo "
var y = 20
var z = true

//Tipe-tipe data primitif
var text = "string" //string atau text
var int = 13 //integer atau bilangan bulat
var flt = 3.6 //float atau desimal

//Tipe-tipe variabel
var v1 = "variable umum" //bisa deklarasi ulang & isi bisa diubah
let v2 = "let" //tidak bisa deklarasi ulang tapi isi bisa diubah
const v3 = "const" //tidak bisa deklarasi ulang dan isi tidak bisa di ubah

v2 = "variable biasa" //cara merubah isi dari variable tipe var dan let

// console.log(v3)

var welcome = "Halo Semuanya "
var num = 42
var flt = 3.6

console.log(welcome.length)
console.log(welcome.indexOf('Semua'))

//length dimulai dari 1
//index dimulai dari 0

console.log(welcome.substr(0,4)) //index karakter awal, berapa karakter yang mau diambil
console.log(welcome.slice(5,10)) //index karakter awal, index karakter akhir

console.log(welcome.split(" ")) //untuk memisahkan string menjadi beberapa bagian

//toUpperCase & toLowerCase adalah fungsi dasar tanpa paremeter
console.log(welcome.toLowerCase()) //ubah jadi huruf kecil
console.log(welcome.toUpperCase()) //ubah jadi huruf besar

console.log(welcome.replace('Halo','Hello')) //replace kata atau char paling depan
console.log(welcome.replace(/Halo/g,'Hello')) //replace semua kata atau char berulang dalam string var 

console.log(num.toString()) //mengubah angka atau data lain menjadi text/string 
console.log(typeof(num.toString())) //memeriksa tipe data

parseInt(num) //mengubah string menjadi integer/number
console.log(num)
console.log(typeof(num))

console.log(parseInt(flt))
console.log(parseFloat(flt))

//Type Coersion -> String + Number = String

console.log(welcome + flt)

var nama = "Andi"
var usia = 18
var greeting = "Halo nama saya " + nama + " dan saya " + usia + " tahun."
console.log(greeting)

console.log(num + usia)

//Matematika Dasar

var hitung = 2 + 4
var hitung2 = ((2 * 4) + 4) / 3
console.log(hitung2)

usia++ //increment
usia += 2
console.log(usia + 2)

var angka = 20

angka-- //decrement
angka -= 2
console.log(angka)

console.log(14 % 4) //Modulus
//Modulus 14 % 4 = 2
//Sisa pembagian



