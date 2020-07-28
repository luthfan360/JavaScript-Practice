//Variable
var a = "String"

//Array
var b = ["String",420]

//Object
var c = {
    namaDpn : "Tomy",
    namaBlk : "Hartono",
    usia : 55,
    pekerjaan : "politisi",
    mobil : ["Toyota","Camry","2.5V"],
    }

console.log(c)

//Object Literal
var d = {
    namaDpn : "Luthfan",
    fakultas : "FEB",
    jurusan : "MBA",
    absen : 37
}

//New Object
var Andi = new Object()

Andi.namaDpn = 'Andi'
Andi.namaBlk = 'Noya'
Andi.pekerjaan = 'Presenter'

console.log(Andi)

//Object Builder/Constructor
var mahasiswa = function(nama,jurusan,id) {
    this.nama = nama;
    this.jurusan = jurusan;
    this.id = id;
}

var Budi = new mahasiswa('Budi','IT',42069)

//Cara update dan add data/properti langsung
Budi.id = 12345
Budi.lulus = true

console.log(Budi)

//Class Contructor
class siswa {
    constructor(nama,jurusan,id) {
        this.nama = nama;
        this.jurusan = jurusan;
        this.id = id;
    }
}

var Charlie = new siswa('Charlie','IPA',1337)
console.log(Charlie)

console.log(c.namaDpn)
console.log("Nama saya " + c.namaDpn + " " + c.namaBlk)

//Akses array dalam object
console.log(c.mobil)
console.log(c.mobil[1])
console.log(c.mobil[0] + " " + c.mobil[1])

//Delete dan update properti object
delete c.mobil
c.pekerjaan = "Napi"

console.log(c)

//Create array property
var orang = function(namaDpn,namaBlk,KTP) {
    this.nama = [namaDpn,namaBlk],
    this.id = KTP
}

var Affandi = new orang("Heri","Affandi",1366604)
console.log(Affandi)
console.log(Affandi.nama[0])

//Nesting Object atau Object Porperty
var e = {
    nama : ['Yanto','Soekarno'],
    usia : 62,
    pekerjaan : {
        bidang : "konstruksi",
        jabatan : "project manager",
        perusahaan : ["Wika","Balikpapan"]
    }
}

console.log(e)
console.log(e.pekerjaan)
console.log(e.pekerjaan.jabatan)
console.log(e.pekerjaan.perusahaan[0])

//FUNCTION
function contoh() {
    console.log("Hello World")
}
contoh()

//function namaFunction(parameter)
    //{program atau kode yang ingin dijalankan}

//Function Statement
function test() {
    console.log("Test Successful!")
}
test()

//Function Expression
var example = function() {
    console.log("Function Expressed")
}
example()

//Function Sederhana
let x = 3
let y = 4

function kali() {
    console.log(x * y)
}
kali()

function kali2() {
    return x * y
}
console.log(kali2())

//Function dengan Parameter
function tambah(a,b) {
    console.log(a + b)
}
tambah(2,3)

function halo(nama) {
    console.log("Halo " + nama + ", selamat datang.")
}
halo("Daniel")

function tgl(nama,thnLahir) {
    console.log(nama + ' lahir pada tahun ' + thnLahir)
}
tgl("Edo",1993)

//Function Local Variable
function hitung(x,y) {
    z = x + y
    console.log(z)
}
hitung(3,4)

//Return in Function
function kali3(x) {
    return x * 3
}
console.log(kali3(4))

//Fn inside of Fn
function multiply(x) {
    if (x < 2) {return 1}
    else {return (x * tiga())}
}
function tiga() {
    return 3
}
console.log(multiply(5))




