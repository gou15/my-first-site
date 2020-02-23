let sum = 0;
let evenCounter = 0;
for (number = 0; number <= 1000; number+=2){
    sum += number;
    if (number % 2 == 0){
        evenCounter++;
    }
    if (evenCounter > 20){
        break;
    } else {
        console.log(`Sum so far is ${sum}`);
    }
}