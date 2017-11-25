// Directions
// Given an integer, return an integer that is the reverse ordering of numbers.

// Example:
// reverseInt(15) === 51;
//reverseInt(981) === 189;
//reverseInt(500) === 5;
//reverseInt(-15) === -51;
//reverseInt(-90) === -9;

function reverseInt(n) {
  const reversedInt = n.toString().split('').reverse().join('');
  return parseInt(reversedInt) * Math.sign(n);
  // if (n < 0) {
  //   return parseInt(reversedInt) * -1;
  // } else {
  //   return parseInt(reversedInt);
  // }
}

reverseInt(15) === 51;
reverseInt(981) === 189;
reverseInt(500) === 5;
reverseInt(-15) === -51;
reverseInt(-90) === -9;

//800.288.2020