function asciiEncode(text) {
    return text.split('').map(char => char.charCodeAt(0)).join(' ');
}

function asciiDecode(text) {
    return text.split(' ').map(char => String.fromCharCode(char)).join('');
}

function binaryEncode(text, segmentLength = 8) {
    return text.split('').map(char => {
        let binary = char.charCodeAt(0).toString(2);
        return binary.padStart(segmentLength, '0');
    }).join(' ');
}

function binaryDecode(text) {
    let segments = text.split(' ');
    return segments.map(segment => String.fromCharCode(parseInt(segment, 2))).join('');
}

const morseCodeMap = {
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
'1': '.----',
'2': '..---',
'3': '...--',
'4': '....-',
'5': '.....',
'6': '-....',
'7': '--...',
'8': '---..',
'9': '----.',
'0': '-----',
' ': '/'      //space
};

const reverseMorseCodeMap = Object.fromEntries(Object.entries(morseCodeMap).map(([k, v]) => [v, k]));

function morseEncode(text) {
return text.toUpperCase().split('').map(char => morseCodeMap[char] || '').join(' ');
}

function morseDecode(text) {
return text.split(' ').map(code => reverseMorseCodeMap[code] || '').join('');
}

function hexColourEncode(text) {
    // Step 1: Convert text to ASCII codes
    const asciiCodes = text.split('').map(char => char.charCodeAt(0));

    // Step 2: Group into sets of 3 with '0' padding if necessary
    const groupedCodes = [];
    for (let i = 0; i < asciiCodes.length; i += 3) {
        let group = asciiCodes.slice(i, i + 3);
        while (group.length < 3) {
            group.push(0); // Pad with 0 if less than 3 elements
        }
        groupedCodes.push(group);
    }

    // Step 3: Convert each group to hex color code
    const hexColors = groupedCodes.map(group => {
        const hex = group.map(code => code.toString(16).padStart(2, '0')).join('');
        return `#${hex}`;
    });

    return hexColors.join(' ');
}

function hexColourDecode(text) {
    // Remove '#' if present and split by space
    const hexCodes = text.replace(/#/g, '').split(' ');

    // Convert each hex code to ASCII codes
    const asciiCodes = hexCodes.flatMap(hex => {
        const chars = [];
        for (let i = 0; i < hex.length; i += 2) {
            const code = parseInt(hex.substring(i, i + 2), 16);
            if (code !== 0) {
                chars.push(String.fromCharCode(code));
            }
        }
        return chars;
    });

    return asciiCodes.join('');
}

function translate() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const mode = document.querySelector('input[name="mode"]:checked').value;
    const cipher = document.getElementById('cipherSelect').value;
    const binarySegmentLength = parseInt(document.getElementById('binarySegmentSelect').value);

    let result = '';

    if (cipher === 'ascii') {
        if (mode === 'encode') {
            result = asciiEncode(inputText);
        } else if (mode === 'decode') {
            result = asciiDecode(inputText);
        }
    } else if (cipher === 'binary') {
        if (mode === 'encode') {
            result = binaryEncode(inputText, binarySegmentLength);
        } else if (mode === 'decode') {
            result = binaryDecode(inputText);
        }
    } else if (cipher === 'morse') {
        if (mode === 'encode') {
            result = morseEncode(inputText);
        } else if (mode === 'decode') {
            result = morseDecode(inputText);
        }
    } else if (cipher === 'hex-colour') {
        if (mode === 'encode') {
            result = hexColourEncode(inputText);
        } else if (mode === 'decode') {
            result = hexColourDecode(inputText);
        }
    }

    outputText.value = result;
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Output copied to clipboard!');
}

function toggleBinarySegmentSelect() {
    const cipher = document.getElementById('cipherSelect').value;
    const binarySegmentContainer = document.getElementById('binarySegmentContainer');

    if (cipher === 'binary') {
        binarySegmentContainer.style.display = 'block';
    } else {
        binarySegmentContainer.style.display = 'none';
    }
}

document.getElementById('inputText').addEventListener('input', translate);
document.querySelectorAll('input[name="mode"]').forEach(radio => radio.addEventListener('change', translate));
document.getElementById('cipherSelect').addEventListener('change', () => {
    toggleBinarySegmentSelect();
    translate();
});
document.getElementById('binarySegmentSelect').addEventListener('change', translate);

// Initialize the binary segment container visibility
toggleBinarySegmentSelect();