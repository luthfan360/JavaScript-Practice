var Luthfan = {
    firstName: 'Luthfan',
    lastName: 'Auzan',
    fullName: function() {
        return this.firstName + " " + this.lastName
    },
    Birth: [7,3,1994],
    Age: function() {
        if (new Date().getMonth() <= (this.Birth[1]-1)) {
        return new Date().getFullYear() - this.Birth[2] - 1
        }
        else {
        return new Date().getFullYear() - this.Birth[2]
        }
    },
    Occupation: 'Teacher'
}

Luthfan.address = 'Bandung'

// console.log(Luthfan)
// console.log(Luthfan.Birth[0])
console.log(Luthfan.fullName())
// console.log(Luthfan.Age())

// function orang(nama, usia, job) {
//     this.namaDpn = nama;
//     this.umur = usia;
//     this.pekerjaan = job;
//     }

//     var Andi = new orang('Andi', 30, 'PNS');
//     var Anto = new orang('Anto', 28, 'Swasta')
//     Andi.negara = 'Indonesia'
//     Anto.negara = 'Indonesia'
//     console.log(Andi)
//     console.log(Anto)

person.name = function () {
    return this.firstName + " " + this.lastName
}

    