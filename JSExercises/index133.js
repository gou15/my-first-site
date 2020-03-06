const mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];
for (let n = 1; n >= 1; n--){
    if (mutants.indexOf("Magneto") != -1){
        break;
    }
    else {
        mutants.forEach(function(mutant){
            console.log(mutant);
        });
    }
}
let villian = mutants.indexOf("Magneto");
    if (villian > 1){
        mutants[villian] = "Not Magneto";
        mutants.forEach(function(mutantNoMagneto, index){
            console.log(mutantNoMagneto.toUpperCase(), index);
        });
    }