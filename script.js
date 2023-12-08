// Variables for display
let displayNumber = document.querySelector(".calc-display");
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
    let result = Function("return " + expression)();
    if (result === Infinity) {
        result = "Sorry, but dividing by zero doesn't make sense.";
    }
    return result;
}

displayKeyPress();