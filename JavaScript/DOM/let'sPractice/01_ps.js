// Create an input element and set its placeholder.
let inp = document.createElement("input");
inp.placeholder = "username";

// Create a button and add text inside it.
let btn = document.createElement("button");
btn.id = "btn";
btn.innerText = "Click me";

// Add the input and button to the page.
document.body.append(inp, btn);

// Select the button and style it.
let newBtn = document.querySelector("#btn");
newBtn.style.backgroundColor = "blue";
newBtn.style.color = "white";

// Create a heading and add it at the start of the page.
let heading = document.createElement("h1");
heading.innerText = "DOM Practice";
document.body.prepend(heading);
heading.style.color = "purple";
heading.style.textDecoration = "underline";

// Create a paragraph and add bold text inside it.
let para = document.createElement("p");
document.body.append(para);
para.innerHTML = "<b>Consistency</b> beats talent";

