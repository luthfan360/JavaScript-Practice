var vector = 3.5 //attack angle
var power = 85
var distance = 30 //distance in cm, max power decay = 300cm
var decay = 300

function ball() {
    var momentum = power * (1 - (distance / decay));
    var maxAngle = (100 / distance) * 1; //available degree for each direction
    var hitPower = 100 - (Math.abs(vector) * 50);
    var transfer = (momentum + hitPower) / 2; 
    var aod = (90 - (Math.abs(vector) * 45)); //angle of departure
    var distance2 = hitPower * (100 - (aod / 3)) //ball 2 distance

    console.log(momentum);
    console.log(maxAngle);
    console.log(hitPower);
    console.log(transfer);
    console.log(aod);
    console.log(distance);
}
ball()