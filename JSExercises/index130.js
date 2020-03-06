let mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Beast", "Phoenix"];
const cloneMutants1 = [...mutants];
cloneMutants1.sort();
const cloneMutants2 = [...mutants];
cloneMutants2.sort().reverse();
console.log("Orig: " + mutants);
console.log("Sorted: " + cloneMutants1);
console.log("Reversed: " + cloneMutants2);
console.log("Joined: " + cloneMutants2.join(" * "));