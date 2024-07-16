let min = 1;
let max = 100;
let guessNumber;

function adivina() {
    min = 1;
    max = 100;
    guessNumber = Math.floor((min + max) / 2);
    showMessage(`¿Es tu número ${guessNumber}?`);
    document.getElementById('startButton').style.display = 'none';
}

function showMessage(message) {
    document.getElementById('message').innerHTML = `
        <p style="margin-left: 10%; color: #FFFFFF">${message}</p>
        <button class="btn btn-success" style="margin-left: 12.5%;" onclick="correctGuess()">Sí</button>
        <button class="btn btn-danger" style="margin-left: 2%;" onclick="minGuess()">Menor</button>
        <button class="btn btn-warning" style="margin-left: 2%;" onclick="maxGuess()">Mayor</button>
    `;
}

function correctGuess() {
    alert(`¡Tú número es ${guessNumber}! Excelente decisión.`);
    document.getElementById('message').innerHTML = '';
    document.getElementById('startButton').style.display = '';

}

function minGuess() {
    max = guessNumber - 1;
    nextGuess();
}

function maxGuess() {
    min = guessNumber + 1;
    nextGuess();
}

function nextGuess() {
    if (min > max) {
        alert("No puede ser, parece que hubo un error.");
        document.getElementById('message').innerHTML = '';
    } else {
        guessNumber = Math.floor((min + max) / 2);
        showMessage(`¿Es tu número ${guessNumber}?`);
    }
}
