let tripExpenses = [129.99, 999.99, 49.99];
let budget = tripExpenses.reduce(function(sum, value){
    return sum + value;
});
console.log("Hotel: " + tripExpenses[0]);
console.log ("Flights: " + tripExpenses[1]);
console.log("Eats: " + tripExpenses[2]);
console.log("Total: " + budget);