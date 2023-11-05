// Variables for display
let displayNumber = document.querySelector(".calc-display");
let m;  // First number
let n;  // Second numbe
let operator;
const digits = document.querySelectorAll(".digit");
const operationKeys = document.querySelector(".operation-key");
const functionKeys = document.querySelector(".function-key");
const allKeys = document.querySelectorAll("button");

// Basic operations
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

// Main operation function
function operate(a, b, op) {
    switch(op) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            console.log("Unrecognized operation");
    }
}

// Display key presses
function displayKeyPress() {
    allKeys.forEach(key => {
        key.addEventListener("click", () => {
            if (key.textContent == "AC") {
                displayNumber.textContent = "0";
            }
            else {
                displayNumber.textContent = key.textContent;
            }   
        })
    })
}

displayKeyPress();