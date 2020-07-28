//Array adalah objek yang dapat menyimpan lebih dari 1 data
var z = "string"
var a = ["string",13]

console.log(a)

//Membuat Array secara Literal
var b = ["Pajero","Fortuner","Terrano"]
console.log(b)

//Membuat Array dengan fungsi new Array
var c = new Array(12,36,14)
console.log(c)

//Mengubah Array Menjadi String
console.log(b.toString())

//Mengubah Array Menjadi String dengan pembatas lain
console.log(b.join(' - '))

//Tampilkan salah satu data di console
console.log(b[0])

//Panjang Array
console.log(b.length)

//Pengurutan Data
console.log(b.sort())

//Memutar balik urutan data
console.log(b.reverse())

//Melihat index suatu data dalam array
console.log(b.indexOf('Fortuner'))

var buah = ["Mangga","Pisang","Semangka"]
var sayur = ["Selada","Kol","Brokoli"]

//Menghapus data di urutan terakhir dalam array
buah.pop()
console.log(buah)

//Menambah data ke urutan terakhir dalam array
buah.push("Durian")
console.log(buah)

//Menghapus data di urutan pertama dalam array
sayur.shift()
console.log(sayur)

//Menambah data ke urutan pertama dalam array
sayur.unshift("Buncis")
console.log(sayur)

//Nesting Array atau Multidimensional Array
var angka = [
    [1,2,3],
    [4,5,6],
    [7,8,8],
    10
]

//Akses Array dalam Array
console.log(angka[0][1])
console.log(angka[3])

var nama = [
    ["James","Jeremy","Richard"],
    ["Rutherford","Banks","Collins","Gabriel"],
    ["Harry","Ron","Hermione"]
]

//Modifikasi data dalam nesting array
//namaArray[index array tujuan].push(elemen baru)
nama[0].push("Abbie")
nama[1].pop()
console.log(nama)

//3 Dimensional Array
var x = [
    [
    12,
    [13,14,15],
    16
    ],
    17
]

console.log(x[0])
console.log(x[0][1])
console.log(x[0][1][1])

//Number Sorting
var y = [3,1,4,6,9,2]

//Urutkan dari kecil ke besar
console.log(y.sort())

//Urutkan dari besar ke kecil
console.log(y.sort(function(a,b) {
    return b-a
}))

var buah2 = ["Mangga","Pisang","Jambu"]

// namaArray.splice(index tujuan, berapa element di remove)
buah2.splice(0,1)

// namaArray.splice(index tujuan, berapa element di remove, elemen baru)
buah2.splice(2,0,"Lemon","Kiwi")
console.log(buah2)

//Delete elemen tanpa mengubah index elemen lain
delete buah2[2]
console.log(buah2)

var mobil = ["Porsche","Ferrari","McLaren","Lexus"]

//Potongan atau sebagian dari suatu array
//namaArray.slice(index awal, index akhir)
console.log(mobil.slice(1,3))

var kota = ["Depok","Tangerang","Bogor"]

kota[1] = "Bekasi"
kota[kota.length] = "Jakarta"
kota[4] = "Tangerang"

var kota2 = ["Cirebon","Bandung","Garut"]
var kota3 = ["Cilegon","Serang","Anyer"]

var semuaKota = kota.concat(kota2)
var semuaKota2 = kota2.concat(kota)
var semuaKota3 = kota.concat(kota2,kota3)

console.log(semuaKota3)
// console.log(semuaKota2)