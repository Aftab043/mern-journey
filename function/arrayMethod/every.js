let arr = [1,2,3,4];
let wrong = arr.every((el) => (el % 2 == 0));
console.log(wrong);

let arr1 = [2,4,6,8];
let right = arr1.every((el) => (el % 2 == 0));
console.log(right);

let arr3 = [10,20,30,40,20];
let multiple = arr3.every((num)=> {
    if(num % 10 == 0){
        return num;
    } 
});
console.log(multiple);