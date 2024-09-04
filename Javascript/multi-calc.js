// Selecting the display input field
const display = document.querySelector('.multi-calculator-display');

// Function to append value to the display
function appendValue(value) {
  if (value === '=') {
    calculateResult();
  } else {
    display.value += value;
  }
}

// Function to calculate the result
function calculateResult() {
  try {
    // Replace mathematical symbols with their JavaScript equivalents
    let expression = display.value
      .replace(/π/g, 'Math.PI')
      .replace(/e/g, 'Math.E')
      .replace(/sin/g, 'Math.sin')
      .replace(/cosin/g, 'Math.cos')
      .replace(/tan/g, 'Math.tan')
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/x!/g, 'factorial') // Custom factorial handler
      .replace(/(\d+)!/g, 'factorial($1)'); // Handling factorial (e.g., 5!)

    // Evaluate the expression using eval
    let result = eval(expression);
    
    // Display the result
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

// Custom factorial function
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
  display.value = display.value.slice(0, -1);
}