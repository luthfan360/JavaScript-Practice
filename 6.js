// let mobil = ['Ayla','Xenia','Avanza'];
// console.log(mobil)
// console.log(mobil.toString())
// console.log(mobil.join(' * '))
// console.log(mobil[0])
// console.log(mobil[1])
// console.log(mobil[2])
// console.log(mobil[3])

// let buah, bPjg, i;
// buah = ['Jeruk', 'Nanas', 'Apel'];
// bPjg = buah.length;
// for (i = 0; i < bPjg; i++) {
// console.log(buah[i]);
// }

//let nums = [40, 100, 1, 5, 25, 10];
//let z = nums.sort(function(a,b){return(b-a)});
//let x = nums.sort();
//let y = nums.reverse();
//console.log(x)
//console.log(y)

// let nums1 = [40, 100, 1, 5, 25, 10]; //array length is 6
// let w = sort(nums1, function(a,b){return(a-b)}) //b-a or a-b to make sorting des or asc
// //assign parameter (array & callback fn)
// function sort(arr,cb) { //function naming and parameter 
//     for(var i = 0; i < arr.length-1; i++) { //outer loop - array i is 0, as long as i < arr.length-1, i keeps ++ looping
//         for(var j = i + 1; j < arr.length; j++) { //inner loop - array j is 0, as long as j < arr.length, j keeps ++ looping
//             if(cb(arr[i],arr[j]) > 0) { //if array i and j > 0, then continue, else not
//                 var temp = arr[i] //assign flexible or temporary var
//                 arr[i] = arr[j] //switch position if one is smaller/greater than other
//                 arr[j] = temp //
//             }
//         }
//     }
//     return arr;
// }
// console.log(w)

let numero = [0, 8, 1, 2, 3, 7];
let x = sort(numero, function(a,b){return(a-b)})
function sort(array,callback) {
    for (var i = 0; i < array.length-1; i++) {
        for (var j = i+1; j < array.length; j++) {
            if(callback(array[i],array[j]) > 0) {
                var temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array;
}
console.log(x)

