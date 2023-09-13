document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageDiv = document.getElementById('message');
    const welcomeMessage = document.getElementById('welcome-message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'user' && password === 'password') {
            messageDiv.style.display = 'block';
            welcomeMessage.textContent = `Welcome, ${username}!`;
        } else {
            alert('Invalid credentials!!! Try again.');
        }
    });
});
