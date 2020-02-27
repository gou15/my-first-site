function getLongerText(string1, string2){
    if (string1.length > string2.length){
        return string1
    }
    else if (string2.length > string1.length){
        return string2
    }
    else{
        return "error"
    }
}
console.log(getLongerText("banana", "hammock"));