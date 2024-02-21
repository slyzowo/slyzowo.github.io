function translateToRGB() {
    var inputText = document.getElementById('inputText').value;
    var outputDiv = document.getElementById('output');

    // Create a div for each color box
    outputDiv.innerHTML = '';

    // Convert each group of three characters to RGB values
    for (var i = 0; i < inputText.length; i += 3) {
        var imageContainer = document.createElement('div');
        imageContainer.className = 'color-box';

        // Get RGB components based on individual ASCII values
        var red = inputText.charCodeAt(i) % 256;
        var green = inputText.charCodeAt(i + 1) % 256;
        var blue = (i + 2 < inputText.length) ? inputText.charCodeAt(i + 2) % 256 : 0;

        // Set background color using RGB values
        imageContainer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        outputDiv.appendChild(imageContainer);
    }
}