// function hello(){
//     console.log("hello")
// }
// function demo(){
//     console.log("Calling hello fnx");

//     hello();
// }
// console.log("Calling demo fnx");
// demo();
// console.log("done, bye!")

// visualizing the call Stack
// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//     let ans = two()+one()
//     console.log(ans);
// }

// three();

// Single Threaded

setTimeout(function() {
    console.log("Happy New Year");
}, 2000);

console.log("Hello...")