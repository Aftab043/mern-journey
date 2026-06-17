// Q.1
// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] != 2){
//         console.log(arr[i]);
//     }
// }

// Q.2
// let num = 287152;
// let count = 0;
// while(num > 0){
//     num = Math.floor(num/10);
//     console.log(num);
//     count++;
// }

// Q.3
// let num = 287152;
// let sum = 0;
// while(num > 0){
    // get lastDigit
// let lastdigit = num % 10;
    // sum add in lastDigit
    // sum += lastdigit;
    // remove lastDigit
    // num = Math.floor(num/10);
    // and print sum 
    // console.log(`The sum is ${sum}`);
// }

// Q.4
// Number(prompt("Enter a number"));
// console.log(Number);
// let num = prompt("Enter your number")
// // let num = 5;
// let fact = 1;
// for(let i=1; i<=num; i++){
//     fact = fact * i;
//     console.log(fact)
// }

// Q.5
let arr = [3,7,2,6,5,8];
let largest = arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
console.log(largest);


