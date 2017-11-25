// Directions
// Given a string, return the character that is most commonly used in the string.
// Example
// maxChar("abccccccccd") === "c";
// maxChar("apple 12311111111111") === "1";

function maxChar(string) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  
  for (let char of string) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

maxChar("abccccccccd") === "c";
maxChar("apple 12311111111111") === "1";