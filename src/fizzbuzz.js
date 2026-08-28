export function fizzbuzz() {
  for (let number = 1; number <= 100; number++) {
    let replaceWord = "";
    if (number % 3 === 0) {
      replaceWord += 'Fizz';
    }
    if (number % 5 === 0) {
      replaceWord += 'Buzz';
    }
    console.log(replaceWord ? replaceWord : number);
  }
}

fizzbuzz();