let url = "https://catfact.ninja/fact";
fetch(url)

let btn = document.querySelector("button");
btn.addEventListener("click", async() =>{
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
})

// .then((result) => {
//     return result.json();
// })
// .then((data) => {
//         console.log("data 1 = ",data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("data 2 = ",data2.fact);
//     })
// .catch((err) => {
//     console.log(err);
// });

//using fetch with async/await

// async function getFacts() {
//     try{
//         let res1 = await fetch(url);
//         let data1 = await res1.json();
//         console.log("data 1 = ",data1.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log("data 2 = ",data2.fact);
//     }
//     catch (e){
//         console.log("ERROR = ",e);
//     }
// }

// console.log(getFacts());


// write Axios
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact
    }
    catch(e){
        console.log("ERROR -- ", e);
        return "No fact found";
    }
} 