let number1 = 0;
let number2 = 1;
let number3 = 0;
for (let cycle = 1; (cycle <=10); cycle++){
    console.log(number1);
    number3 = number2 + number1;
    number1 = number2
    number2 = number3
}