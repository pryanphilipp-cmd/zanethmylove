function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === 'zanethmybebe' && pass === '112522') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function logout() {
    window.location.href = 'home.html';
}