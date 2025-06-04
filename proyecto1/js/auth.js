document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogueado = JSON.parse(localStorage.getItem('logueado'));
    const currentPage = window.location.pathname.split('/').pop(); 
    if (currentPage === 'profile.html') {
        if (!usuarioLogueado) {
            alert('Debes iniciar sesión para acceder a tu perfil.');
            window.location.href = 'login.html'; 
        }
    }

    if (usuarioLogueado && (currentPage === 'login.html' || currentPage === 'signup.html')) {
        window.location.href = 'profile.html';
    }
    if (currentPage === 'profile.html' && usuarioLogueado) {
      
        const welcomeMessage = document.getElementById('welcomeMessage'); 
        const usernameDisplay = document.getElementById('usernameDisplay');
        const emailDisplay = document.getElementById('emailDisplay');

        if (welcomeMessage) {
            welcomeMessage.textContent = `¡Bienvenido, ${usuarioLogueado.nombreCompleto.split(' ')[0]}!`; 
        }
        if (usernameDisplay) {
            usernameDisplay.textContent = `Usuario: ${usuarioLogueado.username}`;
        }
        if (emailDisplay) {
            emailDisplay.textContent = `Email: ${usuarioLogueado.email}`;
        }
    }
});

function cerrarSesion() {
    localStorage.removeItem('logueado'); 
    alert('Has cerrado sesión correctamente.');
    window.location.href = 'login.html'; 
}