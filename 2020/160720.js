var halo = "Halo, \n selamat siang"

function hei(nama) {
    console.log("Hei, nama saya " + nama + ", dan saya dari Jakarta")
}

hei("Charlie")

//Template Literals

var helo = `Halo,
selamat siang`

function hi(nama) {
    console.log(`Hi, my name is ${nama}, and I am from Jakarta`);
    console.log(`I am ${3*7} years old`)
}

function kali(x,y) {
    console.log(`${x} dikali ${y} hasilnya adalah ${x*y}`)
}

kali(3,8)

//String Methods

var x = "test \n"

console.log(x.repeat(5))

console.log(x.includes('st'))

console.log(x.startsWith('te'))
console.log(x.endsWith('\n'))

//Spread Operator

let buah = ["mangga","pisang","jambu"]

console.log(buah)
console.log(...buah)

let no1 = [1,2,3]
let no2 = [no1,4,5,6]
let no3 = [...no1,7,8,9]

console.log(no1)
console.log(no2)
console.log(no3)

function jumlah(x,y,z) {
    console.log(x+y+z)
}

jumlah(no1[0],no1[1],no1[2])
jumlah(...no1)

//Default Parameter

function kuadrat(x=5) {
    console.log(x*x)
}

kuadrat(8)

//Regular Function

function hello() {
    console.log("Hello World")
}
hello()

function hello1() {
    return "Hello World"
}
console.log(hello1())

//Arrow Function

let alo = () => console.log('Aloha')
alo()

let alo1 = () => {
    console.log('Aloha')
}
alo1()

let greet = () => "My name is Andre Haxor"
console.log(greet())

let intro = nama => `My name is ${nama}`
console.log(intro("Linus Sebastian"))

let intro1 = nama => console.log(`My name is ${nama}`)
intro1("Felix Kjellberg")

let bagi = (x,y) => console.log(`${x} dibagi ${y} adalah ${x/y}`)
bagi(10,2)

//Callback

let extra = function() {
    console.log("This is extras")
}

let ultra = function(Callback) {
    console.log("Ultra");
    Callback()
}

ultra(extra)

let multiply = (x,y) => console.log(x*y)

let divide = (x,y) => console.log(x/y)

let count = (x,y,op) => {
    op(x,y)
}

count(4,5,multiply)
count(8,4,divide)

//Array Filtering

var w = [0,1,2,3,4,5]
var x = w.filter((val) => val !== 1);
var a = w.filter((val) => val % 2 == 0);
var b = w.filter((val) => val % 2 !== 0);
console.log(x)
console.log(a)
console.log(b)
//filtering akan membuat array baru yang sesuai dengan parameter

//Array Mapping

var c = w.map((val) => val * 2)
var d = w.map((val) => Math.pow(val,2))
var e = w.map((val) => val % 2 == 0)
console.log(c)
console.log(d)
console.log(e)