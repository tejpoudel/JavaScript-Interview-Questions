// Define a method, #pair_product?, that accepts two arguments: an array of integers and a target_product (an integer). The method returns a boolean indicating whether any pair of elements in the array multiplied together equals that product. You cannot multiply an element by itself. An element on its own is not a product.
// pairProduct?([3, 1, 5], 15) => true

const pairProduct = (arr, num) => {
    let startIdx = 0,
        endIdx = arr.length - 1,
        product = arr[startIdx] * arr[endIdx];
    while (product !== num) {
        if(product > num) {
            endIdx--;
        } else {
            startIdx++;
        }
        product = arr[startIdx] * arr[endIdx];
    }
    
    if (product === num) {
        return true;
    }
    return false;
}

console.log(pairProduct([3, 5, 1], 15));
console.log(pairProduct([3, 1, 6], 13));
console.log(pairProduct([3, 4, 7, 3], 28));