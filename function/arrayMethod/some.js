let array = [1,2,3,4];
let right = array.some((el) => (el % 2 == 0));
console.log(right);

let array1 = [1,3,5,7];
let wrong = array1.some((el) => (el % 2 == 0));
console.log(wrong);