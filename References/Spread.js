//spread operator is like inserting an array into something

//like this or example
var squirrelNames = ['Lady Nutkins', 'Squirrely McSquirrel', 'Sergeant Squirrelbottom'];
var bunnyNames = ['Lady FluffButt', 'Brigadier Giant'];
var animalNames = ['Lady Butt', ...squirrelNames, 'Juicy Biscuiteer', ...bunnyNames];

console.log(animalNames); //with spread operator:
// => ['Lady Butt', 'Lady Nutkins', 'Squirrely McSquirrel', 'Sergeant Squirrelbottom', 'Juicy Biscuiteer', 'Lady FluffButt', 'Brigadier Giant']

console.log(animalNames); //without spread operator:
//['Lady Butt', ['Lady Nutkins', 'Squirrely McSquirrel', 'Sergeant Squirrelbottom'], 'Juicy Biscuiteer', ['Lady FluffButt', 'Brigadier Giant']]

var values = [25, 50, 75, 100]

// This:
console.log(Math.max(25, 50, 75, 100)); // => 100

// Is the same as this:
console.log(Math.max(...values)); // => 100

/* 
  NOTE: Math.max() typically does not work for arrays unless you write it like:
        Math.max.apply(null, values), but with Spread Operators you can just insert it
        and voila! No need for the .apply() part! Wohoo! :)
*/

