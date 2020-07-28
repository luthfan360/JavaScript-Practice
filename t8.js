var s = '';
for (var h = 0; h < 5; h++) { 
for (var i = 5; i > h; i--) { 
    s += '  ';                
    }
for (var j = 1; j <= h; j++) {
    s += '*' + ' ';            
    }
}                          
console.log(s)