window.onload = function() {
    document.getElementById('encryptButton').addEventListener('click', () => {

        const phrase = document.getElementById('phraseInput').value;
        const shift = parseInt(document.getElementById('shiftInput').value, 10);

        if (phrase.trim() === "") {
            alert("Please enter a phrase to encrypt.");
            return;
        }
        
        if (isNaN(shift)) {
            alert("Please enter a valid shift number.");
            return;
        }

        const encryptedPhrase = caesarCipher(phrase, shift);
        
        document.getElementById('resultOutput').value = encryptedPhrase;
    });
};

function caesarCipher(phrase, shift) {
    return phrase.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const base = char.charCodeAt(0) < 97 ? 65 : 97; 
            return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base);
        }
        return char;
    }).join('');
}