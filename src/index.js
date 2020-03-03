const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
},
SPACE = '**********',
MORSE_DASH = '11',
MORSE_DOT = '10',
CHAR_REGEXP = /[01]{10}|[\*]{10}/g,
POINT_REGEXP = /[01]{2}/g

function decode(expr) {

    return expr.match(CHAR_REGEXP).map(char => {
        if (char !== SPACE) {
            
            return MORSE_TABLE[char.match(POINT_REGEXP).map(point => point === MORSE_DASH ? '-' : point === MORSE_DOT ? '.' : '').join('')];
        } 
        return ' '
    }).join('');
}

module.exports = {
    decode
}