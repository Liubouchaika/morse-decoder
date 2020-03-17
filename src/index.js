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

function decode (expr) {
    let numberArray = expr.match(/.{1,10}/g); console.log(numberArray);
    let items = []; 
    let element=[]; 
    for (let i = 0; i < numberArray.length; i++) {
        let array = numberArray[i].match(/.{1,2}/g).filter(item => item !== '00');
        let item = array.forEach( elem => {
            if (elem =='11') {
                element.push('-');
            } else{
                if (elem == '10') {
                    element.push('.');
                }
            }
        }); 
        let it = element.join('');
        items.push(it); element=[];
    }
   let fullArray = [];
   for (let i = 0; i < items.length; i++) {
        if (items[i] == '') {
            fullArray.push(' ');
        } else {
        fullArray.push(MORSE_TABLE[items[i]]);
        }
   };
   return fullArray.join('');
};

module.exports = {
    decode
}