// Store the highest score of the current page session.
let highScore = 0;

// Load sound files.
let clickSound = new Audio("sound/sound.mp3");
let wrongSound = new Audio("sound/gameOver.mp3");

// gameSeq stores computer colors. userSeq stores user clicked colors.
let gameSeq = [];
let userSeq = [];

// started tells us if the game is running or not.
let started = false;
let level = 0;

let h2 = document.getElementById("level-title");
let btns = ["red", "green", "blue", "yellow"];

// Start the game when any key is pressed or touch.
function startGame() {
    if (!started) {
        started = true;
        levelUp();
        console.log("Game Started");
    }
}

document.addEventListener("keypress", startGame);
document.addEventListener("click", startGame);

// Add a new random color and show the full sequence.
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    console.log(randomColor);
    
    gameSeq.push(randomColor);
    console.log(gameSeq);

    for (let i = 0; i < gameSeq.length; i++) {
        let color = gameSeq[i];
        let btn = document.querySelector(`#${color}`);

        // Flash each button one by one.
        setTimeout(() => {
            gameFlash(btn);
        }, 800 * i);

        console.log(btn);
    }
}

// Flash a button and play click sound.
function gameFlash(btn) {
    clickSound.currentTime = 0;
    clickSound.play();

    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

let allBtns = document.querySelectorAll(".btn");

// Add click event to all color buttons.
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// Run when user clicks a color button.
function btnPress() {
    if (!started) {
        return;
    }

    let userColor = this.getAttribute("id");
    console.log(userColor);

    userSeq.push(userColor);
    console.log(userSeq);
    console.log("Button Pressed");

    gameFlash(this);
    
    let idx = userSeq.length - 1;
    checkAns(idx);
}

// Check user answer with computer sequence.
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        console.log("Same Value");

        // If full sequence is correct, go to next level.
        if (userSeq.length === gameSeq.length) {
            setTimeout(() => {
                levelUp();
            }, 1000);
        }
    } else {
        wrongSound.currentTime = 0;
        wrongSound.play();

        // Show red background when answer is wrong.
        document.body.classList.add("game-over");
        setTimeout(() => {
            document.body.classList.remove("game-over");
        }, 250);
        
        if (level - 1 > highScore) {
            highScore = level - 1;
        }

        h2.innerText = `Game Over! Your score was: ${level - 1} and high score is: ${highScore}. Press any key to restart.`;

        reset();
        console.log("Game Over");
    }
}

// Reset all game values after game over.
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

let ruleBtn = document.querySelector(".rules-btn");
let popup = document.querySelector("#popup");
let closeBtn = document.querySelector("#close-btn");

// Open rules popup.
ruleBtn.addEventListener("click", function () {
    popup.style.display = "block";
});

// Close rules popup.
closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});
