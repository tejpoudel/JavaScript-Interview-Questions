// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const isPrime = n => {
    let result = true;
    if(n <= 1) {
        result = false;
    } else {
        for(let i = 2; i <= n/2; i++) {
            if(n % i === 0) {
                result = false;
                break;
            } 
        }
    }  
    return result;
}

const primeFactors = num => {
    let factors = [];
    let primeFact = [];
    for(let j = 0; j < num; j++) {
        if(isPrime(j)) {
            factors.push(j);
        }
    }
    for(let i = 0; i < factors.length; i++) {
        if(num % factors[i] === 0) {
            primeFact.push(factors[i]);
        }
    }
    return primeFact;
}

console.log(primeFactors(13195));
console.log(primeFactors(600851475143));
