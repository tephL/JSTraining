export const PI = 3.14;

export function getSum(...nums){
    let sum = nums.reduce((a, b) => a + b);
    return sum;
}
