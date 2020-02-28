const mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Beast", "Phoenix"];
const orderedMutants = mutants.sort();
const reverseMutants = orderedMutants.reverse();
const joinedMutants = orderedMutants.join("*");
console.log("Orig: " + mutants);
console.log("Sorted: " + orderedMutants);
console.log("Reversed: " + reverseMutants);
console.log("Joined: " + joinedMutants);