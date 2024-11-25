// Calculator logic
let display = document.getElementById("display");
let historyList = document.getElementById("history-list");
let currentInput = "";
let history = [];

// Button click event listeners
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function () {
        let buttonText = button.innerText;

        if (buttonText === "=") {
            // Evaluate the expression and display the result
            try {
                let result = eval(currentInput.replace("×", "*").replace("÷", "/"));
                display.innerText = result;
                history.push(currentInput + " = " + result);
                updateHistory();
                currentInput = result.toString();
            } catch (error) {
                display.innerText = "Error";
            }
        } else if (buttonText === "C") {
            // Clear the display
            currentInput = "";
            display.innerText = "";
        } else if (buttonText === "←") {
            // Backspace to delete last character
            currentInput = currentInput.slice(0, -1);
            display.innerText = currentInput;
        } else if (buttonText === "x²") {
            // Calculate the square of the number
            currentInput = Math.pow(parseFloat(currentInput), 2).toString();
            display.innerText = currentInput;
        } else if (buttonText === "x³") {
            // Calculate the cube of the number
            currentInput = Math.pow(parseFloat(currentInput), 3).toString();
            display.innerText = currentInput;
        } else if (buttonText === "√") {
            // Calculate the square root of the number
            currentInput = Math.sqrt(parseFloat(currentInput)).toString();
            display.innerText = currentInput;
        } else {
            // Append the button text to the current input
            currentInput += buttonText;
            display.innerText = currentInput;
        }
    });
});

// Function to update the calculation history
function updateHistory() {
    historyList.innerHTML = ""; // Clear current history
    history.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        historyList.appendChild(li);
    });
}