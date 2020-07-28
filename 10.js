var x = 1;
var y = 0;
var z = 23;

console.log('D C')

for (x = 1; x <= z; x++) {
    if (x % 2 == 0) {
        y += 2;
        }
    else {
        y += 1;
    }
    // console.log(y);
    var xs = x.toString();
    var ys = y.toString();
    console.log(xs + ' ' + ys);
}
 