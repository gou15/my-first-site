let firstPerson  = ["Mike", "Jezegou", "123 Fake Street", "34"];
let secondPerson = ["Milayner", "Gorook", "123 Fake Street", "31"];
let testPerson = ["Mike", "Jezegou", "123 Fake Street", "34"];
let fPerson = firstPerson.reduce(function(sum, value){
    return sum + value;
})
let sPerson = secondPerson.reduce(function(sum, value){
    return sum + value;
})
console.log(fPerson);
console.log(sPerson);
console.log(testPerson);