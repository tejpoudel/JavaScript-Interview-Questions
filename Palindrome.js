// Directions
// Given a string, return true if the string is a palindrome
// or false if it is not. Palindromes are strings that form the same word if it is reversed.
// *Do* include spaces and punctuation in determining if the string is a palindrome.

// Example:
// palindrome("abba") === true;
// palindrome("abcdfg") === false;

function palindrome(str) {
  // let reversed = '';
  // for (let character of str) {
  //   reversed = character + reversed;
  // }
  // return reversed === str;
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

palindrome("abba") === true;
palindrome("abcdfg") === false;