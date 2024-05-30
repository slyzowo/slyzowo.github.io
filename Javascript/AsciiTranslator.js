// scripts.js
function encodeToASCII() {
    const inputText = document.getElementById('inputText').value;
    let asciiCodes = [];
    for (let i = 0; i < inputText.length; i++) {
        asciiCodes.push(inputText.charCodeAt(i));
    }
    document.getElementById('outputText').value = asciiCodes.join(' ');
}

function decodeFromASCII() {
    const inputText = document.getElementById('inputText').value;
    let chars = inputText.split(' ').map(code => String.fromCharCode(code));
    document.getElementById('outputText').value = chars.join('');
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Output has been copied to your clipboard');
}