//promise is, well look at this piece below

let promise = new Promise(function(accept,reject) {
let completed = true;
if(completed) {
accept('Welcome to Wii Shop!');
    } 
else {
reject('Network is not connected');
    }
});

promise.
then(function(accept) {
console.log(accept);
}).
catch(function(reject) {
console.log(reject);
})

//you can write whatever you want for promise var name, condition (fn parameter), etc.