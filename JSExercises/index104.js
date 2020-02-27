let number1 = 0;
let number2 = 1;
let number3 = 0;
let cycle = 1
let fibonacci = function(){
    while (cycle <=10){
        console.log(number1);
        number3 = number2 + number1;
        number1 = number2
        number2 = number3
        cycle++
    }
};
cycle = 0;
fibonacci();
fibonacci();
fibonacci();
fibonacci();