
function page_load() {
    // Sets the clicked button to active (used when having a group of button)
    document.querySelectorAll(".button_group").forEach(function (button) {
        button.addEventListener("click", function () {
            // Remove 'active' attribute from all buttons
            document.querySelectorAll(".button_group").forEach(function (b) {
                b.removeAttribute("active")
            });

            // Set 'active' attribute to 'true' for the clicked button
            this.setAttribute("active", "true");
        });
    });

    //Add event listeners for Cipher triggers
    //On keyup
    document.querySelectorAll(".hs_cipher_input .text_box").forEach(function (field) {
        field.addEventListener('keyup', function () {
            initialise_cipher();
        });
    });
    //On method change (encode / decode)
    document.querySelectorAll('.cipher_method').forEach(function(button) {
        button.addEventListener('click', function() {
            initialise_cipher();
        });
    });
}

// Scripts for Ceaser Cipher Project

// function to call the ceasar cipher class
function initialise_cipher() {
    if (document.getElementById('cipher_shift').value > 26) {
        document.getElementById('cipher_shift').value = 26;
    }

    if (document.getElementById('cipher_shift').value < 0) {
        document.getElementById('cipher_shift').value = 0;
    }

    let _text_val = document.getElementById('cipher_text').value;
    let _shift_val = document.getElementById('cipher_shift').value;

    //call the ceaser-cipher class
    let _cipher_class = new ceasar_cipher(_text_val, _shift_val);
    _cipher_class.shift_alphabet();
}

//Creating the class ceasar-cipher
class ceasar_cipher {

    constructor(_text, _shift) {
        this._text = _text;
        this._shift = _shift;
    }
    
    shift_alphabet() {
        // Original alphabet
        let _alphabet = 'abcdefghijklmnopqrstuvwxyz';
        // Shifting the alphabet based on the shift value
        let _shifted = _alphabet.slice(this._shift).concat(_alphabet.slice(0, this._shift));
        //Get the method to use
        let _method = document.querySelector('.cipher_method[active="true"]').id;
        if (_method == 'cipher_encode') {
            this.encode_cipher(_alphabet, _shifted);
        } else {
            this.decode_cipher(_alphabet, _shifted);
        }
    }

    encode_cipher(_alphabet, _shifted) {
        let _result = '';

        this._text.split('').forEach(function (_char, _index) {
            if ((_alphabet).includes(_char)) {
                //Check if current character is lower cased alphabetic
                _result += _shifted[_alphabet.indexOf(_char)];
            } else if (_alphabet.toUpperCase().includes(_char)) {
                //Check if current character is upper cased alphabetic
                _result += _shifted[_alphabet.toUpperCase().indexOf(_char)].toUpperCase();
            } else {
                //Check if current character is not alphabetic
                _result += _char;
            }
        });

        document.getElementById('cipher_result').innerHTML = _result;
    }

    decode_cipher(_alphabet, _shifted) {
        let _result = '';

        this._text.split('').forEach(function (_char, _index) {
            if (_alphabet.includes(_char)) {
                //Check if current character is lower cased alphabetic
                _result += _alphabet[_shifted.indexOf(_char)];
            } else if (_alphabet.toUpperCase().includes(_char)) {
                //Check if current character is upper cased alphabetic
                _result += _alphabet[_shifted.toUpperCase().indexOf(_char)].toUpperCase();
            } else {
                //Check if current character is not alphabetic
                _result += _char;
            }
        });

        document.getElementById('cipher_result').innerHTML = _result;
    }
}