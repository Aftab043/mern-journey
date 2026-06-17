// default Parameter
function sum(a, b=3){
    return a+b;
}
console.log(sum());

// spread
let arr = [1,2,3,4,5];
let spread = Math.min(...arr);
let spread1 = Math.max(...arr);
console.log(...arr);

// spread with array literals 
let newArr = [...arr];
let chars = [..."hello"];

// spread with object literals 
let data = {
    email: "ironman@gmail.com",
    pass: "abcd",
};
let dataCopy = {...data, id: 123};

// rest 
function sum(...args){
    for(let i=0; i<args.length; i++){
        console.log("you gave us:", args[i]);
    }
}

// Destructuring 
let names = ["tony", "bruce", "steeve", "peter"];

// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[3];

let [winner, runnerup] = names;
console.log(winner, runnerup);


