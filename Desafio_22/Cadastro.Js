function validateForm() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var errorMessage = document.getElementById('error-message');

    if (nome.trim() === '' || email.trim() === '' || senha.trim() === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        return false;
    }

    // Outras validações podem ser adicionadas aqui

    return true;
}