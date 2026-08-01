// function savetoDb(data , success, failure){
//     let internetSpeed = Math.floor(Math.random() *10) +1;
//     if(internetSpeed > 4){
//     // console.log("your data was saved : " + data);
//     success();
//     } else {
//         // console.log("Weak connection. data not saved");
//         failure();
//     }
// }
// savetoDb("moveOn", () => {
//     console.log("success : your data was saved");
//     savetoDb("hello world", ()=>{
//         console.log("success2 : data2 saved");
//         savetoDb("Aftab", () => {
//             console.log("success3 : data3 saved");
//         }, () =>{
//             console.log("failure3 : weak connection"); 
//         })
//     }, () =>{
//         console.log("failure2 : weak connection");
//     })
// }, () => {
//     console.log("failure : Weak connection. data not saved");
// });

// function savetoDb(data){
//     return new Promise((success, failure) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             success("success : data was saved");
//         } else {
//             failure("failure : weak connection");
//         }
//     })
// }
// console.log(savetoDb("apna bhai"));



// let firstPromise = new Promise((resolve, reject) => {
//     // asynchronous eg->
//     setTimeout( function sayMyName() {
//         console.log("my name is Aftab");
//     }, 15000);
    
// })

// let promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve(10);
//     } else {
//         reject(-1);
//     }
// })

// promise1.then((message) => {
//     console.log("first msg : " + message);
//     return 20;
// }).then((message) => {
//     console.log("second msg : " + message);
//     return 30;
// }).then((message) => {
//     console.log("fourth msg : " + message);
// })

// promise1.then((message) => {
//     console.log("Then ka message " + message);
// }).catch((error) => {
//     console.log("Error " + error);
// })

function savetoDb(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("success : data was saved");
        } else {
            reject("failure : weak connection");
        }
    });
}
savetoDb("devX")
.then((result) => {
    console.log("data1 saved");   
    console.log("result of promiose : ",result);
    return savetoDb("hello world");
})
.then((result) => {
    console.log("data2 saved");
    console.log("result of promiose : ",result);
    return savetoDb("Aftab");

})
.then((result) => {
    console.log("data3 saved");
    console.log("result of promiose : ",result);
})
.catch((error) => {
    console.log("promise rejected");
    console.log("error of promiose : ",error);

});