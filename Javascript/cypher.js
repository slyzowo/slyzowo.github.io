// Atbash Cipher
function atbash(text) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const base = char <= 'Z' ? 65 : 97;
            return String.fromCharCode(base + (25 - (char.charCodeAt(0) - base)));
        }
        return char;
    }).join('');
}

// ASCII Encode/Decode
function asciiEncode(text) {
    return text.split('').map(char => char.charCodeAt(0)).join(' ');
}
function asciiDecode(text) {
    return text.split(' ').map(char => String.fromCharCode(char)).join('');
}

// Base64 Encode/Decode
function base64Encode(text) {
    return btoa(text);
}
function base64Decode(text) {
    return atob(text);
}

// Binary Encode/Decode
function binaryEncode(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}
function binaryDecode(text) {
    return text.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

// Caesar Cipher
function caesarEncode(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const base = char <= 'Z' ? 65 : 97;
            return String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base);
        }
        return char;
    }).join('');
}
function caesarDecode(text, shift) {
    return caesarEncode(text, 26 - shift);
}

// Hex Colour Encode/Decode
function hexColourEncode(text) {
    const asciiCodes = text.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0'));
    return `#${asciiCodes.join('')}`;
}
function hexColourDecode(text) {
    text = text.replace('#', '');
    const chars = [];
    for (let i = 0; i < text.length; i += 2) {
        chars.push(String.fromCharCode(parseInt(text.substring(i, i + 2), 16)));
    }
    return chars.join('');
}

// Morse Code Encode/Decode
const morseCodeMap = { 
// Alphabet
'A': '.-',
'B': '-...',
'C': '-.-.', 
'D': '-..', 
'E': '.',
'F': '..-.', 
'G': '--.', 
'H': '....', 
'I': '..', 
'J': '.---', 
'K': '-.-', 
'L': '.-..', 
'M': '--', 
'N': '-.', 
'O': '---', 
'P': '.--.', 
'Q': '--.-', 
'R': '.-.', 
'S': '...', 
'T': '-', 
'U': '..-', 
'V': '...-', 
'W': '.--', 
'X': '-..-', 
'Y': '-.--', 
'Z': '--..', 

// Numbers
'0': '-----', 
'1': '.----', 
'2': '..---', 
'3': '...--', 
'4': '....-', 
'5': '.....', 
'6': '-....', 
'7': '--...', 
'8': '---..', 
'9': '----.', 

// Specials
' ': '/',

'&': '.-...',
'\'': '.----.',
'@': '.--.-.',
')': '-.--.-',
'(': '-.--.',
':': '---...',
',': '--..--',
'=': '-...-',
'!': '..--..',
'.': '.-.-.-',
'-': '-....-',
'+': '.-.-.',
'\"': '.-..-.',
'?': '-.-.--',
'/': '-..-.',
';': '-.-.-.',
 };

const reverseMorseCodeMap = Object.fromEntries(Object.entries(morseCodeMap).map(([k, v]) => [v, k]));
function morseEncode(text) {
    return text.toUpperCase().split('').map(char => morseCodeMap[char] || '').join(' ');
}
function morseDecode(text) {
    return text.split(' ').map(code => reverseMorseCodeMap[code] || '').join('');
}

// Translate Function
function translate() {
    const input = document.getElementById('inputText').value;
    const output = document.getElementById('outputText');
    const mode = document.querySelector('input[name="mode"]:checked').value;
    const cipher = document.getElementById('cipherSelect').value;
    const shift = parseInt(document.getElementById('caesarShift').value);
    let result = '';

    switch (cipher) {
        case 'atbash': result = atbash(input); break;
        case 'ascii': result = mode === 'encode' ? asciiEncode(input) : asciiDecode(input); break;
        case 'base64': result = mode === 'encode' ? base64Encode(input) : base64Decode(input); break;
        case 'binary': result = mode === 'encode' ? binaryEncode(input) : binaryDecode(input); break;
        case 'caesar': result = mode === 'encode' ? caesarEncode(input, shift) : caesarDecode(input, shift); break;
        case 'hex-colour': result = mode === 'encode' ? hexColourEncode(input) : hexColourDecode(input); break;
        case 'morse': result = mode === 'encode' ? morseEncode(input) : morseDecode(input); break;
    }

    output.value = result;
}

// Event Listeners
document.getElementById('inputText').addEventListener('input', translate);
document.querySelectorAll('input[name="mode"]').forEach(el => el.addEventListener('change', translate));
document.getElementById('cipherSelect').addEventListener('change', translate);
document.getElementById('caesarShift').addEventListener('input', translate);
document.getElementById('cypher-copy-button').addEventListener('click', () => {
    const output = document.getElementById('outputText');
    output.select();
    document.execCommand('copy');
    alert('Output copied!');
});
