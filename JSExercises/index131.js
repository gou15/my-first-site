let femaleStudents = ["Angela", "Pamela", "Sandra", "Rita", "Monica"];
let maleStudents = ["Dude", "Bud", "Bear", "Guy", "Myork"];
let students = femaleStudents.concat(maleStudents);
let sortedStudents = students.sort();
femaleStudents.forEach(function(ladies, index){
    console.log("index - " + index);
    console.log(ladies);
});
let n = maleStudents.length - 1
while (n >= 0){
    console.log(maleStudents[n]);
    n--
}
n = students.length - 1
for (let number = students.length - 1; number >= 0; number--){
    console.log(students[number]);
}