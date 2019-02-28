// Define a method, twoSumNum, that accepts two arguments:
// an array of integers and a target_product (an integer).
// The method returns indix indicating whether any pair of
// elements in the array added together equals that product.
// You cannot add an element to itself. An element on its own is not a sum.
// twoSumNum([3, 1, 5], 15) => true
const twoSumNum = (arr, target) => {
    let startIdx = 0;
    let endIdx = arr.length - 1;
    let sum = arr[startIdx] + arr[endIdx];
    while (sum !== target) {
        if(sum > target) {
            endidx--;
        } else {
            startIdx++;
        }
        sum = arr[startIdx] + arr[endIdx];
    }
    return [startIdx, endIdx];
}

console.log(twoSumNum([4, 1, 3], 7));