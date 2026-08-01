h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        h1.style.color = color;   
        resolve("color changed");
    }, delay)
    });
}

changeColor("red", 1000)
.then(() => {
    console.log("red color copmleted");
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("orange color completed");
    return changeColor("blue", 1000);
})
.then(() => {
    console.log("blue color completed");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color completed");
    return changeColor("purple", 1000);
})
.then(() => {
    console.log("purple color completed");
})


// changeColor("red",1000,() =>{
//     changeColor("orange",1000,()=>{
//         changeColor("aqua",1000,()=>{
//             changeColor("grey",1000,()=>{
//                 changeColor("pink",1000)
//             });
//         });
//     });
// },);


//  Callback Nesting -> Callback Hell.
