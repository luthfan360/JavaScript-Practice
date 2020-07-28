var test = function() {
    return {
        hello: [1,[1,2,function() {
            return function(test) {
                return {
                    keren: function() {
                        console.log('Ribet banget')
                    }
                }
            }
        }]]
    }
}

test().hello[1][2]()(true).keren()
// var c = test().hello[1][2]()
// c(true).keren()

// var a = test()
// var b = a.hello[1][2]
// b()
// a.hello[1][2]()

var a = test
console.log('isi a : ', a)
var b = a()
console.log('isi b : ',b)
var c = b.hello
console.log('isi c : ',c)
var d = c[1]
console.log('isi d : ',d)
var e = d[2]
console.log('isi e : ',e)
var f = e()
console.log('isi f : ',f)
var g = f(50)
console.log('isi g : ',g)
var h = g.keren
console.log('isi h : ',h)
var j = h()
console.log('isi j : ',j)

//I love you like a function
//I can give you all the parameters
//and I don't mind a void return