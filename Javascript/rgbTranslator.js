function translateToRGB() {
    const inputText = document.getElementById('inputText').value;
    const asciiValues = toAscii(inputText);
    const rgbGroups = groupIntoRGB(asciiValues);
    const hexColors = rgbGroups.map(rgb => rgbToHex(rgb));

    displayOutput(hexColors);
}

function toAscii(text) {
    return text.split('').map(char => char.charCodeAt(0));
}

function groupIntoRGB(asciiValues) {
    const groups = [];
    for (let i = 0; i < asciiValues.length; i += 3) {
        let group = asciiValues.slice(i, i + 3);
        while (group.length < 3) {
            group.push(0);  // Fill with 0 if there are not enough numbers
        }
        groups.push(group);
    }
    return groups.map(group => ({
        r: group[0],
        g: group[1],
        b: group[2]
    }));
}

function rgbToHex({ r, g, b }) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

function displayOutput(hexColors) {
    const outputText = document.getElementById('outputText');
    outputText.value = hexColors.join(', ');
}

function decodeFromHex() {
    const hexInput = document.getElementById('inputText').value;
    const hexColors = hexInput.split(',').map(hex => hex.trim());
    const asciiValues = hexColors.flatMap(hex => hexToRgb(hex));
    const decodedText = asciiToText(asciiValues);

    displayDecodedOutput(decodedText);
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
}

function asciiToText(asciiValues) {
    return asciiValues.map(value => String.fromCharCode(value)).join('');
}

function displayDecodedOutput(decodedText) {
    const outputText = document.getElementById('outputText');
    outputText.value = decodedText;
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Output has been copied to your clipboard");
}
