// let x = 'haloha';

// console.log(x.startsWith('ha'));
// console.log(x.startsWith('lo'));
// console.log(x.startsWith('lo',2));
// console.log(x.endsWith('lo'));
// console.log(x.endsWith('ha'));
// console.log(x.endsWith('ha',x.length-2));

let x = () => {
    console.log('Hai ini X!');
    };
    
    let y = (callback) => {
    console.log('Halo ini Y!');
    callback();
    };
    y(x);

function contoh(arr, fn) {
    let newArr = []
        for(var i = 0; i< arr.length; i++){
            let hasil = fn(arr[i])
            newArr.push(hasil)
        }
        return newArr
    }
    
    function tambahDua(num){
        return num + 2
    }
    function kaliDua(num){
        return num * 2
    }
    
    console.log(contoh([1,2,3], tambahDua))
    

//function without callback function

let hitung = (no1, no2, op) => {
if(op == 'kali') {
return no1*no2
};
if(op == 'bagi') {
return no1/no2
};
}; console.log(hitung(2, 3, 'kali'));