// function hello(){
//     console.log("what's up");
// }
// hello();

// function printName(){
//     console.log("Aftab Bhai");
// }
// printName();

// function print1to5(){
//     for(let i=0; i<=5; i++){
//         console.log(i);
//     }
// }
// print1to5();

// function isAdult(){
//     let age = 20;
//     if(age <= 18){
//         console.log("adult");
//     } else {
//         console.log("not adult");
//     }
// }
// isAdult();

// function poem(){
//     console.log("twinkle twinkle little star");
//     console.log("how I wonder what you are");
// }
// poem(); 

// function rollDice(){
//     let dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
// }
// rollDice();
 
// function printInfo(name , age){
//     console.log(`name is ${name} and age is ${age}`)
// }
// printInfo("Aftab" , 22);
// printInfo("shradha" , 30);
// printInfo("karan");

// function sum(a,b){
//     // console.log(a+b);
//     return a+b;
// }

// console.log(sum(sum(1, 2), 3));
// console.log(sum(1,4));



// function calcAvg(a,b,c){
//     let avg = (a + b + c)/3;
//     console.log(avg);
// }
// calcAvg(10,42,30);

// function table(){
//     let n = prompt("enter number");
//     for(let i=1; i<=10; i++){
//         console.log(i * n);
//     }
// }
// table();

// function printSum(n){
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }

// let str = ["hi", "hello", "bye", "kaisa", "hai", "retu"];
// function concat(str){
//     let result = "";
//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(concat(str));

// const sum = function(a, b){
//         console.log(a+b);
// }
// sum(2, 4)

// function multipleGreet(func, n){
//     for(let i=1; i<=n; i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("namaste");
// }

// multipleGreet(greet, 2);

// function oddEvenTest(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2 == 0));
//         }
//     } else if(request == "even"){
//         return function(n){
//             console.log(n%2 == 0);
//         }
//     } else {
//         console.log("wrong request");
//     }
// }

// const calculator = {
//     add: function(a,b){
//         return a + b;
//     },
//     sub: function(a,b){
//         return a - b;
//     },
//     mul: function(a,b){
//         return a * b;
//     }
// };

// method shorthand

const calcu = {
    sum(a,b){
        return a + b;
    },
    sub(a,b){
        return a - b;
    }
};
console.log(calcu.sum(4,5));
console.log(calcu.sub(4,5));
