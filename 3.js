var w = 67
var h = 1.65
var i = w / Math.pow(h, 2)

console.log("You are " + w + " kg")
console.log("You are " + h + " m tall")
console.log("Your body mass index is " + i.toFixed(1))

if (i < 18.5) {
    console.log("You are too skinny")
} else if (i >= 18.5 && i < 25.0) {
    console.log("Your weight is ideal")
} else if (i >= 25.0 && i < 30.0) {
    console.log("You are overweight")
} else if (i >= 30.0 && i < 40) {
    console.log("You are severely overweight")
} else if (i >= 40) {
    console.log("You are obese, diet or die")
} else {
    console.log("Calculation Error")
}
