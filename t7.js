var s = '';
for (var h = 0; h < 5; h++) { //h is 0 and will increase until reaches 5 (h < 5)
for (var i = 5; i > h; i--) { //i is 5 and will decrease as long as it is higher than h (5 > 0)
    s += '  ';                //double space or i is 5 and decreasing every loop following
    }
for (var j = 1; j <= h; j++) { //j is 1 and will increase as long as it is lower or equal to h (1 < 5)
    s += '*' + ' ';            //asterisk and space will be added following j value every loop (left triangle)
    }                          //it starts at second row because it has 1 assigned as j value
for (var k = 0; k < j; k++) { //k is 0 and will increase as long as it is lower than j (0 < 1)
    s += '*' + ' ';           //asterisk and space will be added following k value every loop (right triangle)
    }                         
if (i !== 10-1) {
    s += '\n';
    }
}
console.log(s)