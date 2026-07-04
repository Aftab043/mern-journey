let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", () =>{
    // Agar input empty hai, to task add mat karo.
    if(inp.value.trim() == "") {
        return;
    }

    // Naya li banao aur input ka text usme daalo.
    let item = document.createElement("li");
    item.innerText = inp.value;

    // Har new task ke liye delete button banao.
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    // Delete button ko li ke andar, aur li ko ul ke andar add karo.
    item.appendChild(delbtn);
    ul.appendChild(item);

    // Task add hone ke baad input clear karo.
    inp.value = "";

});

ul.addEventListener("click", (event) => {
    // Event delegation: ul par listener hai, par click delete button par check kar rahe hain.
    if(event.target.classList.contains("delete")) {
        // Delete button ka parent li hai, usi li ko remove kar do.
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});
