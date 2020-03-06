let numbers = [];
let i = 0;
for (let n = 1; n <=1000; n++){
    numbers.unshift(n);
}
let allEven = numbers.filter(function(even){
    if (even % 2 == 0){
        return even;
    }
});
let allOdd = numbers.filter(function(odd){
    if (odd % 2 != 0){
        return odd;
    }
});
for (let n = 1; n <= 10; n++){
    console.log(allOdd[(allOdd.length - 1) - n]);
}
for (let n = 0; n <= 19; n++){
    console.log(allEven[0 + n]);
}