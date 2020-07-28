//Recursive Function
function pangkat(x,y) {
    if (y == 1) {
        return x
    }
    else {
        return x = x * pangkat(x,y-1);
    }
}
console.log(pangkat(7,2))

//While Loop
var angka = 1;
var num = 1;

while(angka <= 10) {
    console.log(angka)
    angka++
}

//Do While Loop
do {
    console.log(num)
    num++
}
while(num <= 10)

//For Loop
for(x = 1; x <= 10; x++) {
    console.log(x)
}

// for(kondisi awal; kondisi; increment) {
//     code yang ingin di run
// }

var pesan = "Nomor Antrian : "

for(a = 1; a <= 15; a++) {
    console.log(pesan + a)
}

for(a = 0; a <= 10; a+=2) {
    console.log(pesan + a)
}

//Conditional Loop
var genap = "genap"

for(i = 0; i <= 10; i++) {
    if(i % 2 == 0) {
        console.log(genap)
    }
    else {
        console.log(i)
    }
}

//Loop Break
var text = '';

for(i = 1; i < 10; i++) {
    if (i == 6) {
        break
    }
    text += "Number " + i + "\n";
}
console.log(text)

//Loop Continue
for(i = 1; i <= 10; i++) {
    if (i == 6) {
        continue
    }
    text += "Number " + i + "\n";
}
console.log(text)

//Latihan
var z = 1;

while(z <= 10) {
    if(z % 2 == 0) {
        console.log("Genap")
    }
    else {
        console.log(z)
    }
    z++;
}

console.log("Hello")