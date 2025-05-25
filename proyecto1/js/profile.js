const usuarios = [
    {
        username: "JuanD",
        fullName: "Juan7816",
        age: "19 years old",
        email: "juand@gmail.com",
        password: "juantio666",
        favoritePokemon: {
            // VALENTINA PONE EL TEMA DE LOS POKEMONES FAV (PUEDEN SER CUALQUIERA) (SON SOLO 3)CON LA FUNCIÓN QUE LLEVAN
        }
    },
    {
        username: "Valentina",
        fullName: "LaVALE",
        age: "20 years old",
        email: "vale@gmail.com",
        password: "echevale20",
        favoritePokemon: {
            // VALENTINA PONE EL TEMA DE LOS POKEMONES FAV (PUEDEN SER CUALQUIERA) (SON SOLO 3)CON LA FUNCIÓN QUE LLEVAN
        }
    },
    {
        username: "Danielito",
        fullName: "ElDaniel",
        age: "13 years old",
        email: "danirex@gmail.com",
        password: "danielito1234",
        favoritePokemon: {
            // VALENTINA PONE EL TEMA DE LOS POKEMONES FAV (PUEDEN SER CUALQUIERA) (SON SOLO 3)CON LA FUNCIÓN QUE LLEVAN
        }
    }
];

document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var loggedInUsername = urlParams.get('username');

    var currentUser = null; // Variable para almacenar el usuario actual

    if (loggedInUsername) {
        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].username === loggedInUsername) {
                currentUser = usuarios[i]; // Guardar el usuario encontrado
                break; // Salir del bucle
            }
        }
    }

    // Si se encontro un usuario
    if (currentUser) {
        document.getElementById("profileUsername").textContent = currentUser.username;// Actualiza la info
        document.getElementById("profileFullName").textContent = currentUser.fullName;
        document.getElementById("profileAge").textContent = currentUser.age;
        document.getElementById("profileEmail").textContent = currentUser.email;

        // contenedor de Pokemon favorito
        var favoritePokemonContainer = document.querySelector(".favoriteprofile");
        //------------------------------------

    } else {
       
        window.location.href = "login.html" // Si no hay un username te lleva al login
    }
    var logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
                window.location.href = "login.html";// solo te lleva al login
        });
    }
});