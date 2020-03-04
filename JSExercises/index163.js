function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum);
}
add(5, 6, 10, 80, 1600);