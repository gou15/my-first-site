let mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Beast", "Phoenix"];
const closeMutants = [...mutants];
const orderedMutants = closeMutants.sort();
const reverseMutants = closeMutants.reverse();
const joinedMutants = orderedMutants.join("*");
console.log("Orig: " + mutants);
console.log("Sorted: " + orderedMutants);
console.log("Reversed: " + reverseMutants);
console.log("Joined: " + joinedMutants);