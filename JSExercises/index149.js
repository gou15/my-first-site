let intactDigits = {
    rightHand: true,
    leftHand: true,
    rightFoot: false,
    leftFoot: "Missing half digit"
}
let user = {
    name: "Michael",
    lastName: "Jezgou",
    address: "123 Fake Street",
    vehicle: "Tacoma",
    dog: "Leela",

}
user.wife = "Milayna"
user.sibling = true;
user.food = ["steak", "burger"];
user.extremeties = intactDigits;
user.age = 34;
console.log(user)
