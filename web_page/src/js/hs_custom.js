
function page_load() {
    // sets the values for testing purposes on page load
}

function hs_cipherItOut() {
    //declare the variables of _shift and _text
    //to pass these as parameters afterwards
    var _shift = document.getElementById('cipher_shift').value;
    var _text = document.getElementById('cipher_text').value;

    var _alphabet =  'abcdefghijklmnopqrstuvwxyz'; //the original alphabet
    var _shifted_alphabet =  _alphabet.slice(_shift).concat(_alphabet.slice(0,_shift)); //the alphabet after the applying the shift

    var _result = '';

    // cipher the message
    _text.split('').forEach(function(_char, _index){
        //make sure the current character is a letter of the alphabet
        if (_alphabet.includes(_char)) {
            // use index to swap the letters
            _result += _shifted_alphabet[_alphabet.indexOf(_char)];
        } else {
            _result += _char;
        }
    });

    document.getElementById('cipher_out').innerHTML =_result;
}

function hs_decipherIt() {
    //declare the variables of _shift and _text
    //to pass these as parameters afterwards
    var _shift = document.getElementById('cipher_shift').value;
    var _text = document.getElementById('cipher_text').value;

    //the original alphabet
    var _alphabet =  'abcdefghijklmnopqrstuvwxyz';
    //the alphabet after the applying the shift
    var _shifted_alphabet =  _alphabet.slice(_shift).concat(_alphabet.slice(0,_shift));

    var _result = '';

    // cipher the message
    _text.split('').forEach(function(_char, _index){
        //make sure the current character is a letter of the alphabet
        if (_alphabet.includes(_char)) {
            // use index to swap the letters
            _result += _alphabet[_shifted_alphabet.indexOf(_char)];
        } else {
            _result += _char;
        }
    });

    document.getElementById('cipher_out').innerHTML =_result;
}