for (number = 10000; (number >= 0); number--){
    if (number === 0){
        console.log(number);
    } else if (number % 10 == 0){
        console.log(`** ${number} **`);
    } else {
        console.log(number);
    }
}