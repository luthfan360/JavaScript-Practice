var numb = 40;

console.log(numb *= 2)
console.log(numb /= 2)
console.log(numb += 2)
console.log(numb -= 2)
console.log(numb %= 2)
// console.log(numb = numb / 2)

var x = 5;
var y = '5';
var z = 6;

console.log(x == y) //hanya membandingkan value
console.log(x === y) //membandingkan value dan tipe data
console.log(x > y)
console.log(x >= y)
console.log(x < y)
console.log(x <= y)

console.log("\n")

console.log(x === y && y < z) //and - 2 kondisi harus terpenuhi agar bisa true
console.log(x === y || y < z) //or - salah satu kondisi harus terpenuhi agar bisa true

console.log("\n")

// if(kondisi) {program}
// else if (kondisi) {program}
// else {program}

//IF, ELSE IF, and ELSE

var nilai = 7

if (nilai > 8) {
    console.log("Excellent")
}
else if (nilai <= 8 && nilai >= 6) {
    console.log("Great")
}
else if (nilai < 6 && nilai > 3) {
    console.log("Not Great, Not Terrible")
}
else {
    console.log("Terrible")
}

//IF & ELSE with Boolean

var unemployed = true

if (unemployed) {
    console.log("We have a job for you")
}
else {
    console.log("Work hard is the key to success")
}

//SWITCH
var job = "pilot"

switch (job) {
    case "supir" :
        console.log("I drive around town");
        break;
    case "guru" :
        console.log("I teach kids stuff");
        break;
    case "nelayan" :
        console.log("I catch fishes");
        break;
    case "petani" :
        console.log("I harvest crops");
        break;
}

//SWITCH with &&
var baju = "blue"
var shoes = "black"

switch (true) {
    case (baju == "black" && shoes == "white") :
    console.log("I like black shirt, and white shoes");
    break;
    case (baju == "white" && shoes == "white") :
    console.log("I like white shirt, and white shoes");
    break;
    case (baju == "black" && shoes == "black") :
    console.log("I like black shirt, and black shoes");
    break;
    case (baju == "white" && shoes == "black") :
    console.log("I like white shirt, and black shoes");
    break;
}

//LATIHAN

var angka = 2

if (angka % 2 == 1) {
console.log("angka ini ganjil")
}
else {
console.log("angka ini genap")
}

switch (true) {
    case (angka % 2 == 1) :
    console.log("angka ini ganjil");
    break;
    case (angka % 2 !== 1) :
    console.log("angka ini genap");
    break;
    }
