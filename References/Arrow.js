//arrow function can reduce function length, it also assumes return

//before
function hello() {
    return "Hello World!";
  }
  
//after
let hello1 = () => "Hello World!"

console.log(hello())
console.log(hello1())

//now with parameters

//before
function sum(a, b) {
  return a + b
}

//after
let sum1 = (a, b) => a + b

console.log(sum(3,9))
console.log(sum1(6,9))

//other expample parameters

let halo = (nama) => {
console.log(`Halo ${nama}`)
}
halo('Andi');

let hai = nama => console.log(`Hai ${nama}`)
hai('Budi');