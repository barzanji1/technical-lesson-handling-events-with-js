// Select the dodger element for manipulation
// Hint: Use document.getElementById to select the element with id "dodger"
const dodger = document.getElementById("dodger");
dodger.style.left = "180px";
document.addEventListener("keydown", function(event) {
    console.log(event.key); // logs the key pressed

// Function to move the dodger left
// Hint: Define a function moveDodgerLeft()
function moveDdgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
// Hint: Convert the current left position from a string to an integer
// Hint: Ensure the dodger doesn't move off-screen
// Hint: Update the left position of the dodger

// Function to move the dodger right
// Hint: Define a function moveDodgerRight()
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

// Hint: Convert the current left position from a string to an integer
// Hint: Ensure the dodger doesn't move off-screen
// Hint: Update the left position of the dodger
document.addEventListener("keydown", function(event) {
    function (event) {
        if (event.key === "ArrowLeft") {
            moveDodgerLeft();
        } else if (event.key === "ArrowRight") {
            moveDodgerRight();
        }
    }

// Attach event listener to respond to key presses
// Hint: Use document.addEventListener to listen for "keydown" events
// Hint: Inside the event listener, call moveDodgerLeft if the left arrow key is pressed
// Hint: Call moveDodgerRight if the right arrow key is pressed
