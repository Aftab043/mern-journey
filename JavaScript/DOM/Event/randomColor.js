// Select the button from the HTML page.
let btn = document.querySelector("button");

// Run this function whenever the button is clicked.
btn.addEventListener("click", function () {
    // Select the heading that displays the color value.
    let h3 = document.querySelector("h3");
    // Generate a new random RGB color.
    let randomColor = getRandomColor();
    // Show the generated color code inside the heading.
    h3.innerText = randomColor;

    // Select the color-preview div.
    let div = document.querySelector("div");
    // Apply the generated color as the div background.
    div.style.backgroundColor = randomColor;

    // Log a message in the browser console for confirmation.
    console.log("Color updated");
});

// Create and return a random CSS RGB color string.
function getRandomColor() {
    // Generate a random red value from 0 to 255.
    let red = Math.floor(Math.random() * 256);
    // Generate a random green value from 0 to 255.
    let green = Math.floor(Math.random() * 256);
    // Generate a random blue value from 0 to 255.
    let blue = Math.floor(Math.random() * 256);

    // Combine the three values into a valid CSS rgb() color.
    let color = `rgb(${red}, ${green}, ${blue})`;
    // Send the generated color back to the click handler.
    return color;
}
