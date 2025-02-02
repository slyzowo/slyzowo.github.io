
const display = document.querySelector('.multi-calculator-display');

function appendValue(value) {
  if (value === '=') {
    calculateResult();
  } else {
    display.value += value;
  }
}

function calculateResult() {
  try {
    let expression = display.value
      .replace(/π/g, 'Math.PI')
      .replace(/e/g, 'Math.E')
      .replace(/sin/g, 'Math.sin')
      .replace(/cosin/g, 'Math.cos')
      .replace(/tan/g, 'Math.tan')
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/x!/g, 'factorial')
      .replace(/(\d+)!/g, 'factorial($1)');

    let result = eval(expression);
    
    // Display the result
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}