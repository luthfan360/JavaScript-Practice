// Soal no. 1

function soal1(x) {
    for (i = 1; i <= x; i++) {
        if (i % 2 == false) {
            console.log(i)
        }
        else {
            console.log("Ganjil")
        }
    }
}
// soal1(10)

// Soal no. 2

var s2x = 10
var s2y = 15
var s2z = 2

volume = () => {
    v = s2x * s2y * s2z
    console.log(v)
}

// volume()

// Soal no. 3

food = {
    item : "Chicken Nugget",
    weight : 60,
    servingSize : [4,6,9],
    servingWeight : function(x) {
        return "A box of " + x + " " + this.item + " is " + (x * this.weight) + "g"
    }
}
// console.log(food.servingWeight(9))

// Soal no. 4
var s4v = 28
var candies = 0

function candy() {
    for (i = 1; i <= s4v; i++) {
        if (i % 6 == true) {
            candies += 2
        }
        else if (i % 7 == true) {
            candies += 2
        }
        else {
            candies += 1
        }
    }
    console.log(candies)
}
// candy()

// Soal no. 5

let hitung = (no1, no2, op) => {
    if(op == 'kali') {
    return no1*no2
    }
    if(op == 'bagi') {
    return no1/no2
    }
}
// console.log(hitung(2, 3, 'bagi'))

// Soal no. 6

function score(x) {
    if (x <= 50) {
        console.log("Not Great, Not Terrible")
    }
    else if (x > 50 && x <= 75) {
        console.log("You did well")
    }
    else if (x > 75 && x <= 100) {
        console.log("Great Job Comrade")
    }
    else {
        console.log("It's not 3 roentgen, it's " + x)
    }
}
// score(60)

// Soal no. 7

var input = [1,2,3,4,5]
var output = []

function x2() {
    for (i = 0; i < input.length; i++) {
        output.push(input[i] * 2)
        if (i == input.length - 1) {
        console.log(output)
        }
    }
}
// x2()

// Soal no. 8

var test = function() {
    return {
        hello: [1,[1,2,function() {
            return function(test) {
                return {
                    seeya: function() {
                        console.log('You are awesome!')
                    }
                }
            }
        }]]
    }
}

// test().hello[1][2]()(true).seeya()