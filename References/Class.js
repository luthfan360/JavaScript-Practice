//A class is a type of function, but instead of using the keyword function to initiate it, 
//we use the keyword class, and the properties are assigned inside a constructor() method.

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present(x) {
        return x + " I have a " + this.carname;
  }
}

mycar = new Car("Lamborghini");

console.log(mycar.carname)
console.log(mycar.present('Hi,'))