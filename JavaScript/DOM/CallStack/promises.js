function savetoDb(data , success, failure){
    let internetSpeed = Math.floor(Math.random() *10) +1;
    if(internetSpeed > 4){
    // console.log("your data was saved : " + data);
    success();
    } else {
        // console.log("Weak connection. data not saved");
        failure();
    }
}
savetoDb("moveOn", () => {
    console.log("success : your data was saved");
    savetoDb("hello world", ()=>{
        console.log("success2 : data2 saved");
        savetoDb("Aftab", () => {
            console.log("success3 : data3 saved");
        }, () =>{
            console.log("failure3 : weak connection"); 
        })
    }, () =>{
        console.log("failure2 : weak connection");
    })
}, () => {
    console.log("failure : Weak connection. data not saved");
});