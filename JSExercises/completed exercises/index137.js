let numbers = [];
let i = 1000;
for (let n = 1; n <=1000; n++){
    numbers.push(n);
}
let numbersTen = numbers.map(function(number, index){
        return number += 10;
});            
for (let n = 0; n <= 999; n++){
    console.log("index: " + numbers.indexOf(n + 1) + " original number: " + numbers[n] + " incremented value: " + numbersTen[n]);
}