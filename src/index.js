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
};

function decode(expr) {
  let decodeValue = [];
  for (let i = 0; i < expr.length; i += 10) {
    decodeValue.push(expr.slice(i, i + 10).replace(/10/g, '.').replace(/11/g, '-').replace(/\*{10}/g, ' ').replace(/0/g, ''));
  };

  for (let i = 0; i < decodeValue.length; i++) {
    decodeValue[i] = MORSE_TABLE[decodeValue[i]];
    if (decodeValue[i] === undefined) {
      decodeValue[i] = ' ';
    };
  };
  return decodeValue.join('');
}

module.exports = {
    decode
}