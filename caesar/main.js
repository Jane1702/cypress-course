document.addEventListener('DOMContentLoaded', function () {
    const cypherButton = document.getElementById('cypherButton');
    const resultElement = document.getElementById('result');

    cypherButton.addEventListener('click', function () {
        const cypherKey = parseInt(document.getElementById('cypherKey').value);
        const textInput = document.getElementById('textInput').value;
        
        // Call the encrypt function passing the cypher key and text to encrypt
        const encryptedText = encrypt(textInput, cypherKey);

        // Display the encrypted text
        resultElement.textContent = encryptedText;
    });

    function encrypt(text, key) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);

            // Encrypt uppercase letters
            if (charCode >= 65 && charCode <= 90) {
                result += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
            }
            // Encrypt lowercase letters
            else if (charCode >= 97 && charCode <= 122) {
                result += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
            }
            // Leave non-alphabetic characters unchanged
            else {
                result += text.charAt(i);
            }
        }
        return result;
    }
});
