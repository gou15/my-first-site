function biggerNumber(firstNumber, secondNumber){
    if (typeof secondNumber === 'string' || typeof firstNumber === 'string'){
    console.error ("don't use strings plz");
    }
    else if (firstNumber > secondNumber){
        console.log(`${firstNumber} is bigger than ${secondNumber}`);
    }
    else if (secondNumber > firstNumber){
        console.log(`${secondNumber} is bigger than ${firstNumber}`);
    }
    else if (secondNumber === firstNumber){
        console.log(`Both numbers are ${secondNumber}`);
    }
    else{
        console.error ("error");
    }
}
biggerNumber(3, 5);
biggerNumber(6, 3);
biggerNumber(2, 2);
biggerNumber("banana", "banana");