const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let poziciya = 0;
    let fraza = '';
    let znachenie = 0;
    for (let i = 0; i < expr.length / 10; i++) {
        let x = 0;
        let symbol = [];
        while (x < 5) {
            symbol[x] = `${expr[poziciya]}${expr[poziciya+1]}`
            poziciya += 2;
            x++;
        }
        znachenie = symbol.reduce((acc, element) => acc + (element === '10' ? '.' : element === '11' ? '-' : element === '**' ? '*' : ''), '');
        // console.log('znachenie: ' + znachenie);
        if (znachenie !== '*****') {
            fraza = `${fraza}${MORSE_TABLE[znachenie]}`;
        } else {
            fraza = `${fraza} `;
        }
    }
    return fraza;
}

module.exports = {
    decode
}