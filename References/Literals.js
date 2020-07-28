//Template literals allow you to write something as it is written and formatted

//for example, instead of this:
var x = 'XBOX SERIES X'
console.log('Want to have fun tonight?' + '\n Let\'s play ' + x)

//you can write:
var y = 'PlayStation 5'
console.log(`Want to have fun tonight?
Let's play ${y}`)

//use the dollar sign and curly braces to insert data, primitive or otherwise
var z = 'Switch Pro'
console.log(`Have you heard about the all new ${z}?`)

//it is useful for many things, for example:
var userName1 = 'John'
var reg = 50
var premium = 30
console.log(
`Dear ${userName1}
Our Valued Customer
    
We would like to thank you for being our member.
Enjoy more benefits by being our premium member
by upgrading to our premium plan for only:
$${50+30}
$${reg + premium}    

Thank you once again for choosing us.`
) 