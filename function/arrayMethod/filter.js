let nums = [2,4,1,5,6,2,7,8,9,10,20,23,40,50];
let even = nums.filter((num) => (num % 2 == 0));
console.log(even);

let multiple = nums.filter((num) => {
    if(num % 10 == 0){
        return num;
    }
});
console.log(multiple);