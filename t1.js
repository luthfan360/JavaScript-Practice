var s = '';
for (var i = 10; i > 0; i--) {
    for (var j = 1; j < i; j++) {
        s += '*' + ' ';
    }
    s += '*' + '\n';
}
console.log(s)