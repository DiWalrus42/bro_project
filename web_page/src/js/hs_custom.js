
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

    //calls the ceasar-cipher on method change
    document.querySelectorAll(".cipher_method").forEach(function (button) {
        button.addEventListener('click', function(){ ceasar_cipher(); });
    });
}

// function for the ceasar cipher project
function ceasar_cipher() {

    //variable to store the input from the form
    var _shift = document.getElementById('cipher_shift').value;
    var _text = document.getElementById('cipher_text').value;
    
    //declare the alphabets
    var _alphabet = 'abcdefghijklmnopqrstuvwxyz'; //the original alphabet
    var _shifted_alphabet = _alphabet.slice(_shift).concat(_alphabet.slice(0, _shift));
    
    //variable to store the output
    let _result = '';
    
    //Check which method is chosen
    let _chosen_method = document.querySelector('.button_group[active="true"]');
    
    if (_chosen_method.id == 'code_cipher') {
        // Cipher the input text
        _text.split('').forEach(function (_char, _index) {
            //make sure the current character is a letter of the alphabet
            if (_alphabet.includes(_char)) {
                // use index to swap the letters
                _result += _shifted_alphabet[_alphabet.indexOf(_char)];
            } else {
                _result += _char;
            }
        });
    } else {
        // Decipher the input text
        _text.split('').forEach(function (_char, _index) {
            //make sure the current character is a letter of the alphabet
            if (_alphabet.includes(_char)) {
                // use index to swap the letters
                _result += _alphabet[_shifted_alphabet.indexOf(_char)];
            } else {
                _result += _char;
            }
        });
    }

    // print the result
    document.getElementById('cipher_out').innerHTML = _result;

}