let balance = 0;

function updateBalance() {
    document.getElementById('balance').textContent = `Saldo: $${balance}`;
}

function updateResult(message, isSuccess) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
    resultElement.style.color = isSuccess ? 'green' : 'red';
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
        updateResult(`Storting van $${amount} succesvol.`, true);
    } else {
        updateResult('Ongeldig bedrag voor storting.', false);
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        updateResult(`Opname van $${amount} succesvol.`, true);
    } else {
        updateResult('Ongeldig bedrag voor opname of onvoldoende saldo.', false);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateBalance();
});
