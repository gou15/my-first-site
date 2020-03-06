function sort(number1, number2, number3, highToLow){
    if (number1 > number2 && number1 > number3 && number2 > number3 && highToLow == true){
        console.log(number1, number2, number3, highToLow);
    }
    else if (number1 > number2 && number1 > number3 && number2 > number3 && highToLow == false){
        console.log(number1, number2, number3);
    }
    else if (number1 > number2 && number1 > number3 && number2 < number3 && highToLow == true){
        console.log(number1, number3, number2, highToLow);
    }
    else if (number1 > number2 && number1 > number3 && number2 < number3 && highToLow == false){
        console.log(number1, number3, number2);
    }
    else if (number2 > number1 && number2 > number3 && number3 < number1 && highToLow == true){
        console.log(number2, number1, number3, highToLow);
    }
    else if (number2 > number1 && number2 > number3 && number3 < number1 && highToLow == false){
        console.log(number2, number1, number3);
    }
    else if (number2 > number1 && number2 > number3 && number3 > number1 && highToLow == true){
        console.log(number2, number3, number1, highToLow);
    }
    else if (number2 > number1 && number2 > number3 && number3 > number1 && highToLow == false){
        console.log(number2, number3, number1);
    }
    else if (number3 > number1 && number3 > number2 && number1 < number2 && highToLow == true){
        console.log(number3, number2, number1, highToLow);
    }
    else if (number3 > number1 && number3 > number2 && number1 < number2 && highToLow == false){
        console.log(number3, number2, number1);
    }
    else if (number3 > number1 && number3 > number2 && number1 > number2 && highToLow == true){
        console.log(number3, number1, number2, highToLow);
    }
    else if (number3 > number1 && number3 > number2 && number1 > number2 && highToLow == false){
        console.log(number3, number1, number2);
    }
    else{
        console.error("Error!");
    }
}
sort(1, 2, 3, true);
sort(1, 2, 3, false);
sort(1, 3, 2, true);
sort(1, 3, 2, false);
sort(2, 1, 3, true);
sort(2, 1, 3, false);
sort(2, 3, 1, true);
sort(2, 3, 1, false);
sort(3, 1, 2, true);
sort(3, 1, 2, false);
sort(3, 2, 1, true);
sort(3, 2, 1, false);