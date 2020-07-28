var x = new Date()
var m = parseInt(x.getMonth())+1

console.log('This month is ' + m)

switch (m) {
    case (1) :
    console.log("It's currently January");
    break;
    case (2) :
    console.log("It's currently February");
    break;
    case (3) :
    console.log("It's currently March");
    break;
    case (4) :
    console.log("It's currently April");
    break;
    case (5) :
    console.log("It's currently May");
    break;
    case (6) :
    console.log("It's currently June");
    break;
    case (7) :
    console.log("It's currently July");
    break;
    case (8) :
    console.log("It's currently August");
    break;
    case (9) :
    console.log("It's currently September");
    break;
    case (10) :
    console.log("It's currently October");
    break;
    case (11) :
    console.log("It's currently Novemeber");
    break;
    case (12) :
    console.log("It's currently December");
    break;
    default :
    console.log("Time is an Illusion");
}