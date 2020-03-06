let mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Beast", "Phoenix"];
let goodMutants = mutants.filter(function(gMuts){
    if (gMuts != "Magneto" && gMuts != "Gambit" && gMuts !="Iceman"){
        return gMuts;
    }
});
console.log(goodMutants);