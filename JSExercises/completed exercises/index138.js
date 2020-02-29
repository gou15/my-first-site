const mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];
let heartMutants = mutants.map(function(hMutant){
    switch(hMutant){
        case "Professor X":
            return "<3 " + hMutant;
        case "Logan":
            return "<3" + hMutant;
        case "Phoenix":
            return "<3" + hMutant;
        case "Gambit":
            return "<3" + hMutant;
        default:
            return hMutant;
    }
});
console.log(mutants);
console.log(heartMutants);