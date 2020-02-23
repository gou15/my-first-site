let number = 1;
let sum = 0;

do {
  sum += number;
  console.log(`Sum so far is ${sum}`)
  number+=2
} while (number < 1000)