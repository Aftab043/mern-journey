// let arr = [1,2,3,4];
// let single_value = arr.reduce((res , el) => {
//     console.log(res);
//     return res + el;
// });
// console.log(single_value);

// let arr = [1,4,2,5,6,7,2,9,2];
// let max = -1;
// for(let i=0; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }  
// }
// console.log(max)

 let arr = [1,4,2,5,6,7,2,9,2];
let max = arr.reduce((max, el) => {
    if(max < el){
        return el;
    } else {
        return max;
    }
});
console.log(max);

let min = arr.reduce((min, el) => {
    if(min < el){
        return min;
    } else {
        return el;
    }
});
console.log(min);
