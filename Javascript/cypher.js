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
    const asciiCodes = text.split('')
        .map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join('');

    // Split the resulting hex string into groups of 2 characters
    let hexParts = [];
    for (let i = 0; i < asciiCodes.length; i += 2) {
        hexParts.push(asciiCodes.slice(i, i + 2));
    }

    // Split into groups of 3 (for a valid color hex)
    let finalParts = [];
    while (hexParts.length > 0) {
        finalParts.push(hexParts.splice(0, 3).join(''));
    }

    // If there's only one group, add '00' for a valid hex color
    if (finalParts.length === 1) {
        finalParts.push('00');
    }

    // Combine hex parts and add the "#" prefix
    const formattedHex = finalParts.map(part => `#${part}`).join(' ');

    return formattedHex;
}

function hexColourDecode(text) {
    // Remove the '#' if it's there
    text = text.replace('#', '');

    // Check if the text is a valid hex string (should only contain valid hex digits)
    if (!/^[0-9A-Fa-f]{6,}$/i.test(text)) {
        return 'Invalid Hex Code';  // Return error message for invalid input
    }

    // Now decode the hex string into characters
    const chars = [];
    for (let i = 0; i < text.length; i += 2) {
        chars.push(String.fromCharCode(parseInt(text.substring(i, i + 2), 16)));
    }

    return chars.join('');
}


// Hexadecimal Encode / Decode
function hexadecimalEncode(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join('');
}

function hexadecimalDecode(text) {
    let output = '';
    for (let i = 0; i < text.length; i += 2) {
        output += String.fromCharCode(parseInt(text.substr(i, 2), 16));
    }
    return output;
}


// Morse Code Encode/Decode
const morseCodeMap = { 
// Alphabet
'a': '.-',
'b': '-...',
'c': '-.-.', 
'd': '-..', 
'e': '.',
'f': '..-.', 
'g': '--.', 
'h': '....', 
'i': '..', 
'j': '.---', 
'k': '-.-', 
'l': '.-..', 
'm': '--', 
'n': '-.', 
'o': '---', 
'p': '.--.', 
'q': '--.-', 
'r': '.-.', 
's': '...', 
't': '-', 
'u': '..-', 
'v': '...-', 
'w': '.--', 
'x': '-..-', 
'y': '-.--', 
'z': '--..', 

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
    return text.split(' ').map(code => {
        if (reverseMorseCodeMap[code]) {
            return reverseMorseCodeMap[code];
        } else {
            return '?';  // Return '?' for unrecognized Morse code
        }
    }).join('');
}

function pigLatinEncode(text) {
    return text.split(' ').map(word => {
        // Check if the word starts with a vowel
        if (/[aeiouAEIOU]/.test(word.charAt(0))) {
            return word + 'way';  // Words starting with vowels get "way"
        } else {
            // Move the first consonant or consonant cluster to the end and add "ay"
            const firstVowelIndex = word.search(/[aeiouAEIOU]/);
            const consonantCluster = word.slice(0, firstVowelIndex);
            const restOfWord = word.slice(firstVowelIndex);
            return restOfWord + consonantCluster + 'ay';
        }
    }).join(' ');
}

function pigLatinDecode(text) {
    return text.split(' ').map(word => {
        // If the word ends with "way" (starts with a vowel in encoding), remove the "way"
        if (word.endsWith('way')) {
            return word.slice(0, -3);
        } else {
            // Move the last consonant cluster + "ay" back to the front
            const withoutAy = word.slice(0, -2);
            const lastVowelIndex = withoutAy.search(/[aeiouAEIOU]/);
            const consonantCluster = withoutAy.slice(lastVowelIndex);
            const restOfWord = withoutAy.slice(0, lastVowelIndex);
            return consonantCluster + restOfWord;
        }
    }).join(' ');
}

function tapCodeEncode(text) {
    const tapCodeGrid = {
        'A': '1 1', 'B': '1 2', 'C': '1 3', 'D': '1 4', 'E': '1 5',
        'F': '2 1', 'G': '2 2', 'H': '2 3', 'I': '2 4', 'J': '2 5',
        'L': '3 1', 'M': '3 2', 'N': '3 3', 'O': '3 4', 'P': '3 5',
        'Q': '4 1', 'R': '4 2', 'S': '4 3', 'T': '4 4', 'U': '4 5',
        'V': '5 1', 'W': '5 2', 'X': '5 3', 'Y': '5 4', 'Z': '5 5'
    };

    return text.toUpperCase().split('').map(char => {
        if (tapCodeGrid[char]) {
            return tapCodeGrid[char];  // Get the corresponding Tap Code
        }
        return '';  // Ignore characters that are not in the grid
    }).join(' ');
}


function tapCodeDecode(text) {
    const reverseTapCodeGrid = {
        '1 1': 'A', '1 2': 'B', '1 3': 'C', '1 4': 'D', '1 5': 'E',
        '2 1': 'F', '2 2': 'G', '2 3': 'H', '2 4': 'I', '2 5': 'J',
        '3 1': 'L', '3 2': 'M', '3 3': 'N', '3 4': 'O', '3 5': 'P',
        '4 1': 'Q', '4 2': 'R', '4 3': 'S', '4 4': 'T', '4 5': 'U',
        '5 1': 'V', '5 2': 'W', '5 3': 'X', '5 4': 'Y', '5 5': 'Z'
    };

    return text.split(' ').map(pair => {
        if (reverseTapCodeGrid[pair]) {
            return reverseTapCodeGrid[pair];  // Get the corresponding letter
        }
        return '';  // Ignore unknown tap code sequences
    }).join('');
}

function unicodeEncode(text) {
    return text.split('').map(char => `U+${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}`).join(' ');
}
function unicodeDecode(text) {
    return text.split(' ').map(code => {
        if (code.startsWith('U+')) {
            let charCode = parseInt(code.slice(2), 16);
            return String.fromCharCode(charCode);
        }
        return '';  // Ignore non-Unicode strings
    }).join('');
}


function uwuEncode(text) {
    return text.replace(/r/g, 'w').replace(/l/g, 'w').replace(/u/g, 'uwu').replace(/U/g, 'UwU');
}

function uwuDecode(text) {
    return text.replace(/uwu/g, 'u').replace(/UwU/g, 'U').replace(/w/g, 'l');
}



// Reverse Encode/Decode
function reverseEncode(text) {
    return text.split('').reverse().join('');
}
function reverseDecode(text) {
    return reverseEncode(text);  // Same as encoding
}

// Roman Numerals Encode/Decode
const romanMap = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
];

function romanEncode(num) {
    let result = '';
    romanMap.forEach(({ value, numeral }) => {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    });
    return result;
}

function romanDecode(roman) {
    let result = 0;
    let index = 0;

    romanMap.forEach(({ value, numeral }) => {
        while (roman.substr(index, numeral.length) === numeral) {
            result += value;
            index += numeral.length;
        }
    });

    return result;
}

// Translate Function
function translate() {
    const input = document.getElementById('inputText').value;
    const output = document.getElementById('outputText');
    const mode = document.querySelector('input[name="mode"]:checked') ? 
                 document.querySelector('input[name="mode"]:checked').value : 'encode';  // Default to 'encode'
    const cipher = document.getElementById('cipherDropdown').value;
    const shift = parseInt(document.getElementById('caesarShift').value);
    let result = '';

    switch (cipher) {
        case 'atbash': result = atbash(input); break;
        case 'ascii': result = mode === 'encode' ? asciiEncode(input) : asciiDecode(input); break;
        case 'base64': result = mode === 'encode' ? base64Encode(input) : base64Decode(input); break;
        case 'binary': result = mode === 'encode' ? binaryEncode(input) : binaryDecode(input); break;
        case 'caesar': result = mode === 'encode' ? caesarEncode(input, shift) : caesarDecode(input, shift); break;
        case 'hex-colour': result = mode === 'encode' ? hexColourEncode(input) : hexColourDecode(input); break;
        case 'hexadecimal': result = mode === 'encode' ? hexadecimalEncode(input) : hexadecimalDecode(input); break;
        case 'morse': result = mode === 'encode' ? morseEncode(input) : morseDecode(input); break;
        case 'reverse': result = mode === 'encode' ? reverseEncode(input) : reverseDecode(input); break;
        case 'roman-numerals': 
            result = mode === 'encode' ? romanEncode(parseInt(input)) : romanDecode(input); 
            break;
        case 'uwu': result = mode === 'encode' ? uwuEncode(input) : uwuDecode(input); break;
        case 'pig-latin': result = mode === 'encode' ? pigLatinEncode(input) : pigLatinDecode(input); break;
        case 'tap': result = mode === 'encode' ? tapCodeEncode(input) : tapCodeDecode(input); break;
        case 'unicode': result = mode === 'encode' ? unicodeEncode(input) : unicodeDecode(input); break;
    }

    output.value = result;
}


// Event Listeners
function setupEventListeners() {
    document.getElementById('inputText').addEventListener('input', translate);
    document.querySelectorAll('input[name="mode"]').forEach(el => el.addEventListener('change', translate));
    document.getElementById('cipherDropdown').addEventListener('change', translate);
    document.getElementById('caesarShift').addEventListener('input', translate);
    document.getElementById('cypher-copy-button').addEventListener('click', () => {
        const output = document.getElementById('outputText');
        output.select();
        navigator.clipboard.writeText(output.value).then(() => alert('Output copied!'));
    });
}

// Call this function when the page loads or after any dynamic changes
setupEventListeners();

