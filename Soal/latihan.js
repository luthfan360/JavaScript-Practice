//1

function genap() {
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
        else {
            console.log("Ganjil")
        }
    }
}
// genap()

function ganjil() {
    var i = 0;
    while (i !== 10) {
        i += 1;
        if (i % 2 == 0) {
            console.log(i)
        }
        else {
            console.log("Ganjil")
        }
    } 
}
ganjil()


//2

function volume(x,y,z) {
    v = x * y * z
    return "Volume bangunan anda " + v
}
// console.log(volume(5,10,3))

function volume(x,y,z) {
    v = x * y * z
    console.log("Volume bangunan anda " + v)
}
// volume(5,10,3)


//3

let nugget = {
    item : "Chicken Nugget",
    weight : 60,
    servingSize : [4,6,9],
    servingWeight : function(x) {
        sw = this.weight * this.servingSize[x] 
        return "A Box of " + this.servingSize[x] + " " + this.item + " is " + sw +"g"
    },
    serving : function(x) {
        sw = this.weight * x
        return "A Box of " + x + " " + this.item + " is " + sw +"g"
    }
}
// console.log(nugget.serving(4))
// console.log(nugget.serving(6))
// console.log(nugget.serving(9))
// console.log(nugget.serving(12))


//4

function candy(x) {
    var candies = 0;
    for (i = 1; i < x; i++) {
        if (i % 6 == 0 || i % 7 == 0) {
            candies += 2
        }
        else {
            candies += 1
        }
    }
    console.log(candies)
}
// candy(31)
//Jawaban = 39


//5

function kalibagi(n1,n2,op) {
    if (op == "kali") {
        console.log(n1 * n2)
    }
    else if (op == "bagi") {
        console.log(n1 / n2)
    }
}
// kalibagi(12,6,"kali")


//6

function score(x) {
    if (x > 0 && x <= 50) {
        console.log("Not Great, Not Terrible")
    }
    else if (x > 50 && x <= 75) {
        console.log("You did good")
    }
    else if (x > 75 && x <= 100) {
        console.log("Great Job COmrade")
    }
    else {
        console.log("Score is not in range")
    }
}
// score(200)


//7

var input = [1,2,3,4,5]
var output = []

function kalidua() {
    for (i = 0; i < input.length; i++) {
        output.push(input[i] * 2)
    }
    console.log(output)
}
// kalidua()


//8

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


