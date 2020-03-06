let numbers = [];
let sum = 0;
for (let n = 1; n <=1000; n++){
    numbers.push(n);
}
for (let nOne = 0; nOne <=999; nOne++){
    sum = sum + numbers[nOne];
}
console.log(sum);