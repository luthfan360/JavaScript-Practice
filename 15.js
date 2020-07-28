automobile = (brand, model, category, disp, fuel) => {
    this.brand = 'Ferrari';
    this.model = '812 GTS';
    this.category = 'Hyper GT';
    this.disp = 6500;
    this.fuel = 'Gasoline';
    return `${this.brand} ${this.model}`
}

function car(brand, model, category, disp, fuel) {
    this.brand = brand;
    this.model = model;
    this.category = category;
    this.disp = disp;
    this.fuel = fuel;
}

class car1 {
    constructor(brand, model, category, disp, fuel) {
        this.brand = brand;
        this.model = model;
        this.category = category;
        this.disp = disp;
        this.fuel = fuel;
    }
}

var M2 = new car("Mazda", 2, "Hatchback", 1500, "Gasoline")
console.log(M2)
console.log(automobile())

