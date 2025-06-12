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
        document.getElementById('profileUsername').textContent = usuarioLogueado.username;
        document.getElementById('profileFullName').textContent = usuarioLogueado.nombreCompleto;
        document.getElementById('profileEmail').textContent = usuarioLogueado.email;

        mostrarFavoritos();
    }

    document.getElementById('logoutButton').addEventListener('click', cerrarSesion);
});

function cerrarSesion() {
    localStorage.removeItem('logueado');
    alert('Has cerrado sesión correctamente.');
    window.location.href = 'login.html';
}

function mostrarFavoritos() {
    const galeriaFav = document.getElementById("galeria3");
    const favoritos = JSON.parse(localStorage.getItem("pokemonFavoritos")) || [];

    galeriaFav.innerHTML = '';

    favoritos.forEach(pokemon => {
        const card = document.createElement("div");
        card.classList.add("pokem");

        const nombre = document.createElement("h3");
        nombre.textContent = pokemon.nombre.charAt(0).toUpperCase() + pokemon.nombre.slice(1);

        const imagen = document.createElement("img");
        imagen.src = pokemon.imagen;
        imagen.alt = pokemon.nombre;

        const tipos = document.createElement("p");
        tipos.textContent = "Tipo: " + pokemon.tipos;


        var botonInfo = document.createElement("button");
        botonInfo.textContent = "More information";
        botonInfo.onclick = function() {
            var pokemonSeleccionado = {
                id: pokemon.id,
                nombre: pokemon.nombre.charAt(0).toUpperCase() + pokemon.nombre.slice(1)
            };
            localStorage.setItem("pokemonSeleccionado", JSON.stringify(pokemonSeleccionado));
            window.location.href = "producto.html";
        };

       
        var eliminarfav = document.createElement("button");
        eliminarfav.textContent = "Remove Pokemon";
        eliminarfav.onclick = function() {
            const nuevosFavoritos = favoritos.filter(fav => fav.id !== pokemon.id);
            localStorage.setItem("pokemonFavoritos", JSON.stringify(nuevosFavoritos));
            mostrarFavoritos(); 
        };

        card.appendChild(imagen);
        card.appendChild(nombre);
        card.appendChild(tipos);
        card.appendChild(botonInfo);
        card.appendChild(eliminarfav);

        galeriaFav.appendChild(card);
    });
}