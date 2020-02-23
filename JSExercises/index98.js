let sum = 0;
for (number = 0; number <= 1000; number++){
    sum += number;
    if (sum > 400){
        break;
    } else {
        console.log(`Sum so far is ${sum}`);
    }
}