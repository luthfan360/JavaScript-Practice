var days = 23

function candy() {
    if (days % 2 == 0) {
        var even = (days / 2) * 2;
        var odd = (days / 2) * 1;
        console.log(odd + even);
    }
    else if (days % 2 == 1) {
        var even = Math.floor(days / 2) * 2;      
        var odd = Math.floor(days / 2) + 1;
        console.log(odd + even);
    }
    else {
        console.log('an error occured')
    }
}
candy()
