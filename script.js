// Variables for display
let displayNumber = document.querySelector(".calc-display");
const digits = document.querySelectorAll(".digit");
const operationKeys = document.querySelector(".operation-key");
const functionKeys = document.querySelector(".function-key");
const allKeys = document.querySelectorAll("button");
const equals = document.querySelector("#equals");


// Display key presses
function displayKeyPress() {
    allKeys.forEach(key => {
        key.addEventListener("click", () => {
            if (key.textContent == "AC") {
                displayNumber.textContent = "0";
            }
            else if (key === equals) {
                const result = calculate(displayNumber.textContent);
                console.log(result);
                displayNumber.textContent = result;
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

function calculate(expression) {
    const result = Function("return " + expression)();
    return result;
}

displayKeyPress();

// equals.addEventListener("click", () => {
//     const expression = displayNumber.textContent;
//     const expressionArray = parseEquation(expression);
//     const result = operate(expressionArray);
//     displayNumber.textContent = result;
// })
