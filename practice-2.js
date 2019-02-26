
// Anagrams are two words with exactly the same letters. Order does not matter. 
// Define a method that, given two strings, returns a boolean indicating whether they are anagrams.
const anagrams = (string1, string2) => {
  str1 = string1.replace(/[^A-Za-z]+/g, '').toLowerCase().split("").sort().join("");
  str2 = string2.replace(/[^A-Za-z]+/g, '').toLowerCase().split("").sort().join("");
  return str2 === str1;
}

console.log(anagrams("Binod", "bindo"));
console.log(anagrams("Bino", "dinob"));
console.log(anagrams("hi how are you?", "ihwhoerayuo?"));

// An isogram is a word of only non-repeating letters. Define a method that, given two isograms of the same length, 
// returns an array of two elements indicating matches: the first number is the number of letters matched in both 
// words at the same position, and the second is the number of letters matched in both words but not in the same position.
const isogramMatcher = (isogram1, isogram2) => {

}

// You have a panoramic view in front of you, but you only can take a picture of two landmarks at a time (your camera is small). 
// You want to capture every pair of landmarks that are next to each other. Define a method that, given an array of landmarks, 
// returns an array of every adjacent pair from left to right. Assume the panorama wraps around.
const panoramicPairs = landmarks => {

}
// Xbonacci

// Define a Xbonacci method that works similarly to the fibonacci sequence.
// The fibonacci sequence takes the previous two numbers in the sequence and adds
// them together to create the next number.

// First five fibonacci numbers = [1, 1, 2, 3, 5]
// The fourth fibonacci number (3) is the sum of the two numbers before it
// (1 and 2).

// In Xbonacci, the sum of the previous X numbers (instead of the previous 2 numbers)
// of the sequence becomes the next number in the sequence.

// The method will take two arguments: the starting sequence with X number of
// elements and an integer N. The method will return the first N elements in the given
// sequence.

// xBonacci([1, 1], 5) => [1, 1, 2, 3, 5]
// xBonacci([1, 1, 1, 1], 8) => [1, 1, 1, 1, 4, 7, 13, 25]

// X is the length of the starting sequence.

// numberOfXbonacciNumberToReturn is the same as N.
const xBonacci = (startingSequence, numberOfXbonacciNumberToReturn) => {
  if (startingSequence.length >= numberOfXbonacciNumberToReturn) {
    startingSequence = startingSequence;
  } else if (startingSequence < 4) {
    startingSequence = startingSequence;
  } else if (startingSequence.length < numberOfXbonacciNumberToReturn) {
    startingSequence = startingSequence.push((startingSequence.length - 1) + (startingSequence.length - 2) + (startingSequence.length - 3));
  }
  return startingSequence;
}

console.log(xBonacci([1, 1, 1, 1], 8));
// Given an array of words, remove all the occurrences of the letter 'a' in those words and return the resulting array.
const removeLetterA = words => {

}
// An abundant number is less than the sum of its divisors, not including itself. 12's divisors are 1, 2, 3, 4, 6, 
// which sum to 16. xw16 > 12 so 12 is an abundant number.
// Write a method that, given a number, returns a boolean indicating whether that number is abundant.
const abundant = num => {

}
// Return the greatest number that's a factor of both inputs.
// greatestCommonFactor(6, 10) => 2
// greatestCommonFactor(10, 15) => 5
const greatestCommonFactor = (firstNumber, secondNumber) => {

}
// Write a method that, given a sentence without punctuation or capitalization, 
// returns the word with the greatest number of repeated letters. Return the first word if there's a tie.
// It doesn't matter how often individual letters repeat, just that they repeat.
// wordWithMostRepeats("I took the road less traveled and that has made all the difference") =>
// "difference" because "difference" has two repeated letters, more than the other words.
const wordWithMostRepeats = sentence => {

}
// Define a method that accepts two arguments, a string and an integer. The method should return a copy of 
// the string with the nth letter removed.
const removeNthLetter = (string, n) => {

}
// Define a method that chunks an array into a nested array of sub-arrays of length n.
// The last array may be of length less than n if the original array's size does not divide evenly by n.
// chunk([1,2,3,4,5], 2) => [[1,2], [3,4], [5]]
const chunk = (array, n) => {

}

// Define a method that multiplies the frequencies of the periods, commas, hyphens, semicolons, question marks, 
// and exclamation points in a given string and returns the product. If any punctuation does not occur, 
// don't include it in the product, i.e., don't multiply by zero!
const productPunctuation = str => {

}
// Translate a sentence into pig-latin! The first consonants go to the end of the word, then add "ay".
const pigLatin = sentence => {

}

const latinize = word => {

}

// Define a method that returns a boolean indicating whether its second argument is a substring of its first.
const substring = (longString, shortString) => {

}
// Write a method that, given a string, returns a hash in which each key is a character in the 
// string and each value is an array of the first and last indices where that character occurs. 
// If the character occurs only once, the array should contain a single index. Consider defining helper methods.
// firstLastIndicess("banana") => {"b" => [0], "a" => [1, 5], "n" => [2, 4]}
const firstLastIndices = str => {

}
// Define a method that returns the number of times that two adjacent numbers in an array sum to n. Don't reuse numbers.
// countAdjacentSums([1, 5, 1, 3, 3], 6) => 2
const countAdjacentSums = (array, num) => {

}


