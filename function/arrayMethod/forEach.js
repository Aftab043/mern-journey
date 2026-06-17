let arr = [1,2,3,4,5];

arr.forEach(function(el){
    console.log(el);
});

let print = function(el) {
    console.log(el);
}
arr.forEach(print);

console.log("arrow function")
arr.forEach ((el) => {
    console.log(el);
});

arr.forEach((el , index) => {
    console.log(index ,'-->', el);
});

let array = [{
    name: "raju",
    marks: 65,
}, 
{
    name: "rohit",
    marks: 75,
}, 
{
    name: "mohit",
    marks: 45,
}];

array.forEach((student) => {
    console.log(student.marks);
});