
// A "slippery number" has 3 as a factor or has 5 as a factor, but not both. 
// 6 is a slippery, but 30 is not. Define a method that returns a boolean indicating whether its argument is slippery.

const isSlippery = num => {
  if (num % 3 === 0 && num % 5 === 0) {
    return false;
  } else if (num % 5 === 0 || num % 3 === 0) {
    return true;
  }
}

console.log(slipperyNumber(6));
console.log(slipperyNumber(30));

//Write a method that, given an integer n, returns an array of the first n slippery numbers.
//slipperyNumbers(7) => [3, 5, 6, 9, 10, 12, 18]

const slipperyNumbers = num => {
  let slipperyNum = [];
  for (let i = 0; slipperyNum.length < num; i++) {
    if (isSlippery(i) === true) {
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
  for (let i = 0; i < el.length; i++) {
    let word = el[i];
    if (word[word.length - 1] === "e") {
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
  let fibs = [0, 1];
  if (n <= 1) {
    return [0];
  }
  for (let i = 2; i < n; i++) {
    fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);
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
// magicNumbers(3) => [7, 16, 25]

const magicNumber = num => {
  let arrNum = num.toString().split("");
  let sum = 0;
  for (let i = 0; i < arrNum.length; i++) {
    sum = sum + parseInt(arrNum[i]);
  }
  if (sum === 7) {
    return true;
  } else {
    return false;
  }
}

const magicNumbers = n => {
  let numbers = [];
  for (let i = 0; numbers.length < n; i++) {
    if (magicNumber(i)) {
      numbers.push(i);
    }
  }
  return numbers;
}

console.log(magicNumbers(3));


// Define a method that given an array, returns another array of only the unique elements from the first.
// Do not use the built-in uniq method.
// uniq([5, 5, 5, 5]) => [5]
// uniq([1, 2, 1, 3, 3]) => [1, 2, 3]

const uniq = arr => {
  let uniqArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqArr.includes(arr[i])) {
      uniqArr.push(arr[i]);
    }
  }
  return uniqArr;
}

console.log(uniq([5, 5, 5, 5, 5]))
console.log(uniq([1, 2, 3, 2, 3, 2, 4, 3, 5, 4, 6, 5]))

//Define a method that receives two arrays as arguments and returns a new array of arguments
// unique among both arrays (but not necessarily within the array it occurs).
// Maintain original (intra- and inter-array) order.
// allUniqs([1, 1, 3, 6], [2, 3, 6]) => [1, 2]
// allUniqs([1, 2, 3], [1, 2, 3]) => []

const allUniqs = (arr1, arr2) => {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!newArr.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!newArr.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

console.log(allUniqs([1, 1, 3, 6], [2, 3, 6]));
console.log(allUniqs([1, 2, 3], [1, 2, 3]));

// Define a method that reverses the digits of its argument and returns the resulting number.
// reverseDigits(1738) => 8371

const reverseDigits = num => {
  return num.toString().split("").reverse().join("");
}

console.log(reverseDigits(1738));

// Define a method, #pair_product?, that accepts two arguments: an array of integers and a target_product (an integer). The method returns a boolean indicating whether any pair of elements in the array multiplied together equals that product. You cannot multiply an element by itself. An element on its own is not a product.
// pair_product?([3, 1, 5], 15) => true

const pairProduct = (arr, num) => {
  for( let i = 0; i < arr.length; i++) {
    for( let j = 0; j < arr.length; j++) {
      if(i === j) {
        if(arr[i] * arr[j] === num) {
          return true;
        }
      }
    }
  }
  return false
}

console.log(pairProduct([3, 1, 5], 15));


// Define a method, #slice_between_vowels(word), that accepts a string as an argument.
// Your method should return the slice of the word between the first and last vowels of
// that word. Return an empty string if the word has less than 2 vowels.
// sliceBetweenVowels("serendipity") => "rendip"
// sliceBetweenVowels("train") => ""
// sliceBetweenVowels("dog") => ""

const sliceBetweenVowels = word => {
  return word;
}

console.log(sliceBetweenVowels("serendipity"));

// Define a method that, given an array of numbers, returns another array with each
// of the argument's numbers multiplied by two. Do not modify the original array.
const arrayTimesTwo = arr => {
  let timesTwo = [];
  for( let i = 0; i < arr.length; i++) {
    timesTwo.push(arr[i] * 2);
  }
  return timesTwo;
}
console.log(arrayTimesTwo([1,2,3]));

// Define a method that substitutes all five-letter words in its argument with "#####"
// and returns the result. Do not consider punctuation.
// redactFiveLetterWords("long longer longest longy") => "long longer longest #####"

const redactFiveLetterWords = str => {
  let resultStr = [];
  const arrStr = str.split(" ");
  for(let i = 0; i < arrStr.length; i++) {
    if(arrStr[i].length === 5) {
      resultStr.push("#####");
    } else {
      resultStr.push(arrStr[i]);
    }
  }
  return resultStr.join(" ");
}

console.log(redactFiveLetterWords("long longer longest longy"));

// Define a method that takes an array of pairs (two-element arrays) and returns the pair
// with the greatest sum.
// largestPair([[-4,0],[-2,-1],[-3,2]]) => [-3,2]
// largestPair([[1,0]]) => [1,0]

const largestPair = pairArray => {
  let largest = pairArray[0];
  for(let i = 0; i < pairArray.length; i++) {
    if(largest[0] + largest[1] < pairArray[i][0] + pairArray[i][1]) {
      largest = pairArray[i];
    }
  }
  return largest;
}

console.log(largestPair([[-4,0],[-2,-1],[-3,2]]));
console.log(largestPair([[1,0]]));

// Define a method, boolean_to_binary(arr), that accepts an array of booleans as an argument.
// Your method should convert the array into a string of 1's (for true values) and 0's
// (for false values) and return the result.
// booleanToBinary([true]) => "1"
// booleanToBinary([true, false, true]) => "101"

const booleanToBinary = arr => {
  let binary = "";
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === true) {
      binary = binary + 1;
    } else {
      binary = binary + 0;
    }
  }
  return binary;
}

console.log(booleanToBinary([true]));
console.log(booleanToBinary([true, false, true]));

// Define a method that returns the third-largest element in an array.
// Assume the argument has at least three elements.
// third_greatest([5, 9, 3, 7, 7, 2, 10]) == 7

const thirdLargest = arr => {
  let sortedArr = arr.sort(function(a, b){return b - a});
  return sortedArr[2];
}

console.log(thirdLargest([5, 9, 3, 7, 7, 2, 10]));

// Define a method that takes a number of minutes as its argument and returns a string
// formatted HH:MM. Assume the number of hours is always less than 99.
// time_conversion(90) => "01:30"
// time_conversion(0) => "00:00"

const format = num => {
  if(num < 10) {
    return "0" + num.toString();
  } else {
    return num.toString();
  }
}
console.log(format(2));
console.log(format(12));

const timeConversion = mins => {
  let hours = mins/60;
  let minutes = mins % 60;
  return format(Math.floor(hours)) + ":" + format(minutes);
}

console.log(timeConversion(90));
console.log(timeConversion(30));


// Define a method that capitalizes each word of its argument and returns the resulting string.

// Need attention for this solution
const capitalizeEachWord = str => {
  let resultStr = [];
  const arrStr = str.split(" ");
  for(var i = 0; i < arrStr.length; i++) {
    resultStr.push(arrStr[i].toUpperCase());
  }
  return resultStr;
}

console.log(capitalizeEachWord("hi how are you?"));

// Define a method that returns the longest word in its argument.

// Need attention for this solution
const longestWord = str => {
  let editedStr = str.delete("!,.?");
  return editedStr;
}

console.log(longestWord("Hi how are you?"))