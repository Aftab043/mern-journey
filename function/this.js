// const student = {
//     name: "aftab",
//     age: 23,
//     eng: 45,
//     math: 34,
//     phy: 24,
//     getAvg(){
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(this.name ,avg);
//     }
// };                               

// try & catch 
// try {
//     console.log(a);
// } catch {
//     console.log("variable a doesn't ")
// }

// Arrow function
//  const sum = (a,b) => {
//     console.log(a+b);
//  }

//  const cube = (a) => {
//    return a*a*a;
// }

// const pow = (a,b) => {
//     return a**b;
// }

// implicit return in arrow function
// const mul = (a,b) => (
//     a*b);

// setTimeout
// console.log("hi there!");
// setTimeout(() => {
//     console.log("apna college");
//  },4000);
// console.log("Welcome to");

// let id = setInterval(() => {
//     console.log("apna college");
// },2000);

// console.log(id);

// this with arrow function
const student = {
    name: "aman",
    marks: 95,
    prop: this, //global scope
    getName: function() {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope -> window
        return this.marks;
    },
    getInfo1: function() {
        setTimeout(() => {
            console.log(this); //student     
        }, 2000);
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this); //window
        }, 2000)
    },
};
