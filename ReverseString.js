// ---- Directions
// Given a string, return a new string with the reversed order of characters.
// ---- Examples
//  reverse('apple') === 'leppa'
//  reverse('hello') === 'olleh'
//  reverse('love') === 'evol'
//  reverse("he is john") === 'nhoj si eh'

function reverse(string){
//   // Turn 'string' into array.
//   const arr = string.split('');
//   // Call 'reverse' method on the array.
//   arr.reverse();
//   // Join and return the array back into a string.
//   return arr.join('');
// }

//Alternative Method;

// Create an empty string called 'reversed'
// let reversed = '';
// // for each character in the provided string.
// for(let character of string) {
//   // Take the character and add it to the start of 'reversed'
//   reversed = character + reversed;
// }
// // Return the variable 'reversed'
// return reversed;

return string.split('').reduce((rev, char) => char + rev, '');
}

console.log(reverse("apple"));
console.log(reverse("hello"));
console.log(reverse("he is john"));

//This should be true;
reverse('love') === 'evol';