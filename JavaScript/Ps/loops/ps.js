// Qs.1 ->
// let num = 13;
// if(num%10===0){
//     console.log("good");
// }else{
//     console.log("bad")
// }

// Qs.2 ->
// let name = prompt("name");
// let age = prompt("age");
// alert(`${name} is ${age} years old`);

// Qs.3 ->
// let quarter = 3;
// switch(quarter){
//     case 1: 
//         console.log("January, february, march");
//         break;
//     case 2:
//         console.log("April, may, june");
//         break;
//     case 3:
//         console.log("july, august, september");
//         break;
//     case 4: 
//         console.log("october, november, december");
//         break;
//     default:
//         console.log("please enter Quarter in month(1,2,3,4)");
// }

// Qs.4 ->
//  let str = "aloo"
//  if(str[0]==='A' || str[0]==='a'){
//     if(str.length > 5){
//         console.log("Golden String")
//     }else{
//         console.log("not a Golden String")
//     }
//     }else{
//     console.log("not a Golden string")
// }

// Qs.5 ->
// let a = 5;
// let b = 15;
// let c = 1;
// if(a>b && a>c){
//     console.log("A is greater");
// }
// else if(b>a && b>c){
//     console.log("B is greater");
// }else{
//     console.log("C is greater");
// }

//Qs.5 ->
let num1 = 32;
let num2 = 47852;
let last1 = num1 % 10;
let last2 = num2 % 10;
if(last1===last2){
    console.log("same last digit");
}else{
    console.log("Different last digit");
}