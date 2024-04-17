const signupPassword = document.getElementById('signup-password');
const signupConfirmPassword = document.getElementById('signup-confirm-password');
const passwordError = document.getElementById('password-error');

function validatePassword() {
    if (signupPassword.value !== signupConfirmPassword.value) {
        passwordError.textContent = 'Passwords do not match';
        signupPassword.style.borderColor = 'red';
        signupConfirmPassword.style.borderColor = 'red';
        return false;
    } else {
        passwordError.textContent = '';
        signupPassword.style.borderColor = '';
        signupConfirmPassword.style.borderColor = '';
        return true;
    }
}

document.getElementById('signup-submit').addEventListener('click', function(event) {
    if (!validatePassword()) {
        event.preventDefault();
    }
});