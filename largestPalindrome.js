// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = num => {
    let arrStr = num.toString().split("").reverse().join("");
    if(parseInt(arrStr) === num) {
        return true;
    }
    return false;
}
console.log(isPalindrome(808));

const largestPalindrome = () => {
    for(let i = 999; i >= 100; i--) {
        let k = i - 1;
        let product = i * k;
        if(isPalindrome(product) === true) {
            return product;
        }
    }
}

console.log(largestPalindrome());