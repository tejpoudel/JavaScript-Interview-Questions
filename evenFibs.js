// Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
// By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
// find the sum of the even-valued terms.

const evenFibs = num => {
    let fibs = [0, 1];
    let sum = 0 ;
    if(num < 2) {
        return [0];
    }
    for(let i = 0; fibs.length < num; i++) {
        fibs.push(fibs[fibs.length-2] + fibs[fibs.length-1]);
    }
    for(let i = 0 ; i < fibs.length; i++) {
        if(fibs[i] % 2 === 0) {
            sum = sum + fibs[i];
        }
    }
    return sum;
}

console.log(evenFibs(10));