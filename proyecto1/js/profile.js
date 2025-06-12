document.addEventListener('DOMContentLoaded', () => {
    
    const userNameDisplay = document.getElementById('profileUsername');
    const fullNameDisplay = document.getElementById('profileFullName');
    const ageDisplay = document.getElementById('profileAge');
    const emailDisplay = document.getElementById('profileEmail');

   
    const logoutButton = document.getElementById('logoutButton'); 

    const usuarioLogueado = JSON.parse(localStorage.getItem('logueado'));

    if (usuarioLogueado) {
        if (userNameDisplay && usuarioLogueado.username) {
            userNameDisplay.textContent = usuarioLogueado.username;
        }
        if (fullNameDisplay && usuarioLogueado.nombreCompleto) {
            fullNameDisplay.textContent = usuarioLogueado.nombreCompleto;
        }
        if (emailDisplay && usuarioLogueado.email) {
            emailDisplay.textContent = usuarioLogueado.email;
        }
    } else {
        window.location.href = 'login.html';
    }
});
