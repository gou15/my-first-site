let firstNumber = 8;
let secondNumber = 9;
let sum = firstNumber + secondNumber;
let difference = firstNumber - secondNumber;
let product = firstNumber * secondNumber;
let quotient = firstNumber / secondNumber;
let rem1 = firstNumber % secondNumber;
let rem2 = secondNumber % firstNumber;
var templatesum = `I add ${firstNumber} + ${secondNumber} and the result is ${sum}`;
var templatedif = `I subtract ${firstNumber} - ${secondNumber} and the result is ${difference}`;
var templatepro = `I multiply ${firstNumber} * ${secondNumber} and the result is ${product}`;
var templatequo = `I divide ${firstNumber} / ${secondNumber} and the result is ${quotient}`;
var templaterem1 = `I divide ${firstNumber} / ${secondNumber} and the remainder is ${rem1}`;
var templaterem2 = `I divide ${secondNumber} / ${firstNumber} and the remainder is ${rem2}`;
console.log(templatesum);
console.log(templatedif);
console.log(templatepro);
console.log(templatequo);
console.log(templaterem1);
console.log(templaterem2);