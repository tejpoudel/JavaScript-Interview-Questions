// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const smallestMultiple = num => {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product = product * i;
        for (let j = product; j >= 1; j--) {
            if(j % i === 0) {
                return j;
            }
        }
    }
}

console.log(smallestMultiple(10));