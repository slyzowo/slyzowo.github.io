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

function asciiDecoder(encodedText) {
    let decodedText = "";
    const encodedValues = encodedText.split(' ');

    encodedValues.forEach(value => {
        try {
            const character = String.fromCharCode(parseInt(value));
            decodedText += character;
        } catch (error) {
            decodedText += "[Invalid ASCII]";
        }
    });

    return decodedText;
}

function decode() {
    const encodedText = document.getElementById('encoded_text').value;
    const decodedText = asciiDecoder(encodedText);
    document.getElementById('decoded_text').textContent = "Decoded Text: " + decodedText;
}