// Variables for display
let displayNumber = document.querySelector(".calc-display");
const digits = document.querySelectorAll(".digit");
const operationKeys = document.querySelector(".operation-key");
const functionKeys = document.querySelector(".function-key");
const allKeys = document.querySelectorAll("button");
const equals = document.querySelector("#equals");

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
function operate(arr) {
    const a = Number(arr[0]);
    const b = Number(arr[2]);
    const op = arr[1];
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
            else if (key === equals) {
                return displayNumber.textContent;
            }
            else if (displayNumber.textContent === "0") {
                displayNumber.textContent = key.textContent;
            }
            else {
                displayNumber.textContent += key.textContent;
            }                   
        })
    })
}

function parseEquation(str) {
    return str.split("");
}

displayKeyPress();
// let exp = displayKeyPress();
// let expArray = parseEquation(exp);
// let result = operate(expArray);

equals.addEventListener("click", () => {
    const expression = displayNumber.textContent;
    const expressionArray = parseEquation(expression);
    const result = operate(expressionArray);
    displayNumber.textContent = result;
})
