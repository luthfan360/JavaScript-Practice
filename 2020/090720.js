//Object Method adalah Property Object berisi Function

var andy = {
    namaDpn : "Andy",
    namaBlk : "Hasibuan",
    usia : 22,
    pekerjaan : "Karyawan",
    perkenalan : function() {
        return "Hi, my name is " + this.namaDpn
    }
}

console.log(andy.perkenalan())
// cara akses Method : namaObjek.namaFunction()

andy.job = function() {
    console.log("Saya adalah seorang " + this.pekerjaan)
}

andy.job()


//CLASS
var Car = class Car {
    constructor(make, model) {
        this.carmake = make;
        this.carmodel = model;
    }
    present() {
        console.log("This is a brand new " + this.carmake + " " + this.carmodel)
    }
}

mycar = new Car("Honda","Jazz")

console.log(mycar)
mycar.present()

//CLASS contoh 2
class Rectangle {
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.width * this.height
    }
}

var square1 = new Rectangle(16,9);

console.log(square1.area)

//PROTOTYPE

function Person(first,last,age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

Person.prototype.halo = function() {
    return "Halo, saya " + this.firstName + " " + this.lastName
}
Person.prototype.nationality = "Indonesian";

var budi = new Person("Budi","Andika",27)

console.log(budi.halo())

//INHERITANCE

class Orang {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    greeting() {
        return "Hi, my name is " + this.name
    }
}

class Atlit extends Orang {
    constructor(name, age, job, sport) {
        super(name, age, job);
        this.sport = sport;
    }
    greeting() {
        return "Hi, I am a " + this.sport + " Athlete"
    }
}

class Pejabat extends Orang {
    constructor(name, age, job, dept) {
        super(name, age, job);
        this.dept = dept;
    }
    greeting() {
        return "Saya bekerja di " + this.dept
    }
}

var charlie = new Atlit("Charlie", 30, "Designer", "Swimming")
var daniel = new Orang("Daniel", 28, "Programmer")
var eko = new Pejabat("Eko", 56, "Finance", "Menteri Pendidikan")

console.log(charlie.greeting())
console.log(daniel.greeting())
console.log(eko.greeting())

//LATIHAN 1

function volume(x,y,z) {
    hasil = x * y * z
    console.log("volume bangunan anda " + hasil)
}

volume(3,5,4)