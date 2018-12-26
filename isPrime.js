// Return True if the given number is prime otherwise return false. 
var isPrime = function(n) {
    //declare result variables as default true;
    var result = true;
    // If n is less than or equals to 1, return false because they are not prime numbers. 
    if(n <= 1) {
        result = false;
    } // If number is totally devided by any number return false, because the even number can not be prime.
    else {
        for(var i = 2; i <= n/2; i++) {
            if( n % i === 0) {
                result = false;
                break;
            }
        }
    }
    return result;
}

//check for the result
console.log(isPrime(8));
console.log(isPrime(3));
console.log(isPrime(-1));