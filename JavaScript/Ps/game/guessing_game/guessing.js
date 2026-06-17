const max = prompt("Enter a max number");

// print random number 
const random = Math.floor(Math.random() * max) + 1;

// you guess random number
let guess = prompt("lets guess the number");
// user game quit
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    // if you win
    if(guess == random){
        console.log(`you WIN hurrey's 🤷‍♂️ random number was ${random}`);
        break;
    } else if(guess < random){
        guess = prompt("hint : you guess was to small! please try again!");
    } else {
        guess = prompt("hint : you guess was to large! please try again");
    }
}