// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineapple");
// console.log(fruits);
// fruits.pop();
// fruits.shift();
// console.log(fruits);
// fruits.unshift("mango");
// console.log(fruits);
// for(let i=fruits.length-1; i>=0; i--){
//     console.log(i,fruits[i]);
// }

// let heroes = [
//             ["ironman", "spiderman", "thor"],
//             ["superman", "wonderwomen", "flash"],
//             ["shahruk khan", "salman khan", "Amir khan"]];
// for(let i=0; i<heroes.length; i++){
//     console.log(`List #${i}`);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }

// // for of loop 
// let fruits = ["mango", "apple", "banana", "litchi", "Orange"];
// for(fruit of fruits) {
//     console.log(fruit);
// }
// for(char of "apnaCollege"){
//     console.log(char);
// }

// Nested for of loop 
let heroes =[ ["ironman", "spiderman", "thor"],
              ["superman", "wonder women", "flash"] ];
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}



