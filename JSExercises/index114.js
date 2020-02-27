function revert(string){
    if (string.length > 10){
        return "Only accepts 10 or fewer characters"
    }
    else {
    return string.charAt(string.length - 1) + string.charAt(string.length - 2) + string.charAt(string.length - 3) + string.charAt(string.length - 4) + string.charAt(string.length - 5) + string.charAt(string.length - 6) + string.charAt(string.length - 7) + string.charAt(string.length - 8) + string.charAt(string.length - 9) + string.charAt(string.length - 10)
    }
}
console.log(revert("tv"))