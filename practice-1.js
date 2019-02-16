
// A "slippery number" has 3 as a factor or has 5 as a factor, but not both. 
// 6 is a slippery, but 30 is not. Define a method that returns a boolean indicating whether its argument is slippery.
const isSlippery = num => {
  if(num % 3 === 0 && num % 5 === 0) {
   return false;
  } else if ( num % 5 === 0 || num % 3 === 0) {
    return true;
  } 
}

console.log(slipperyNumber(6));
console.log(slipperyNumber(30));

//Write a method that, given an integer n, returns an array of the first n slippery numbers.
//slipperyNumbers(7) => [3, 5, 6, 9, 10, 12, 18]
const slipperyNumbers = num => {
  let slipperyNum = [];
  for(let i = 0; slipperyNum.length < num; i++) {
    if(isSlippery(i) === true) {
      slipperyNum.push(i);
    }
  }
  return slipperyNum;
}

console.log(slipperyNumbers(6));
console.log(slipperyNumbers(12));

// Define a method, #e_words(str), that accepts a string as an argument.
// Your method return the number of words in the string that end with the letter "e".
// eWords("tree") => 1
// eWords("Let be be finale of seem.") => 3

const eWords = str => {
  let sum = 0;
  const el = str.split(" ");
  for(let i = 0; i < el.length; i++) {
    let word = el[i];
    if(word[word.length - 1] === "e") {
      sum++;
    }
  }
  return sum;
}

console.log(eWords("tree"));
console.log(eWords("Let be be finale of seem."));

// The Fibonacci Sequence follows a simple rule: the next number in the sequence is the sum of the previous two.
// The sequence begins with [0, 1]. One computes the third number by summing the first and  second (0 + 1 == 1),
// yielding [0, 1, 1], one computes the fourth number by summing the second and the third, yielding [0, 1, 1, 2],
// and so on.
// Define a method, #fibs, that accepts an integer as an argument. The method should return an array of the first 
// n Fibonacci numbers.
//fibs(1) => [0]
//fibs(6) => [0, 1, 1, 2, 3, 5]
const fib = n => {
  let fibs = [0,1];
  if(n <= 1) {
    return [0];
  }
  for(let i = 2; i < n; i++) {
    fibs.push(fibs[fibs.length-2] + fibs[fibs.length - 1]);
  }
  return fibs;
}

console.log(fib(1));
console.log(fib(6));


//Define a method that returns the sum of all the non-negative integers up to and including its argument.
//sumTo(3) => 6
const sumTo = n => {
  let sum = 0;
  let idx = 0;
  while (idx <= n) {
    sum = sum + idx;
    idx++;
  }
  return sum;
}

console.log(sumTo(3));

// A magic number is a number whose digits, when added together, sum to 7, e.g., 34.
// Define a method that returns an array of the first n magic numbers.
// You may wish to write a helper method that returns a boolean indicating whether a number is magic.
// magic_numbers(3) => [7, 16, 25]
const magicNumber = num => {
  let arrNum =  num.toString().split("");
  let sum = 0;
  for(let i = 0; i < arrNum.length; i++) {
    sum = sum + parseInt(arrNum[i]);
  }
  if(sum === 7) {
    return true;
  } else {
    return false;
  }
}

const magicNumbers = n => {
  let numbers = [];
  for(let i = 0; numbers.length < n; i++) {
    if(magicNumber(i)) {
      numbers.push(i);
    }
  }
  return numbers;
}

console.log(magicNumbers(3));
