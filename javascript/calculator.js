const display = document.getElementById("calculator-display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value;
        if (expression.includes("%")) {
            expression = expression.replace(/%/, "/ 100");
        }

        expression = expression.replace(/cos/g, "Math.cos");
        expression = expression.replace(/tan/g, "Math.tan");
        expression = expression.replace(/sin/g, "Math.sin");

        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

function sqrt() {
    display.value = Math.sqrt(parseFloat(display.value));
}
