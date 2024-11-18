// colours.js

// Function to fetch the JSON file
async function loadColours() {
  try {
    const response = await fetch('json/config.json'); // Make sure the path is correct
    const data = await response.json(); // Parse the JSON

    // Now apply the colours based on the JSON data
    applyColours(data);
  } catch (error) {
    console.error('Error loading the colour data:', error);
  }
}

// Function to apply the colors
function applyColours(colours) {
  // Apply body background and text color
  document.body.style.backgroundColor = colours.colours.body.background;
  document.body.style.color = colours.colours.body.text;

  // Apply enclave background color (if there's an element with class 'enclave')
  const enclaveElements = document.querySelectorAll('.enclave');
  enclaveElements.forEach(element => {
    element.style.backgroundColor = colours.colours.enclave.background;
  });

  // Apply gemini colors to specific elements
  const geminiColours = colours.colours.gemini;
  for (const [role, color] of Object.entries(geminiColours)) {
    const elements = document.querySelectorAll(`.${role}`);
    elements.forEach(element => {
      element.style.color = color; // Apply the color to text
      element.style.borderColor = color; // Apply the color to borders, if desired
    });
  }

  // Apply transparent color (if there's an element with class 'transparent')
  const transparentElements = document.querySelectorAll('.transparent');
  transparentElements.forEach(element => {
    element.style.backgroundColor = colours.colours.transparent;
  });
}

// Call the loadColours function to fetch and apply the colors
loadColours();
