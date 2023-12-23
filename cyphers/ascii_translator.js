function translateToASCII() {
    var inputText = document.getElementById('inputText').value;
    var outputDiv = document.getElementById('output');

    // Convert each character to its ASCII equivalent
    var asciiText = '';
    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);
        asciiText += charCode + ' ';
    }

    outputDiv.textContent = 'ASCII Translation:\n' + asciiText;
}