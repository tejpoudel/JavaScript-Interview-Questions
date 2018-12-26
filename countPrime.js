//Count the number of prime numbers less than a non-negative number, n.

//Example:

//Input: 10
//Output: 4
//Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

//Solution
//Find out the number is prime or not
var isPrime = function(n) {
    var result = true;
    if(n <= 1) {
        result = false;
    } else {
        for(var i = 2; i <= n/2; i++) {
            if(n % i === 0) {
                result = false;
                break;
            }
        }
    }
    return result;
}

// Write a function to count the primes of less than non negative numbers n. 
var countPrime = function(n) {
    var count = 0;
    for(var i = 0; i < n; i++) {
        if(isPrime(i)) {
            count++;
        }
    }
    return count;
}

//Check the solution
console.log(countPrime(10));
console.log(countPrime(1));
console.log(countPrime(15));


