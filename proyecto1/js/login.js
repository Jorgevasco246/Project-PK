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
]
document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.querySelector(".container form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // (evita que la página se recargue)
            var usernameInput = document.getElementById("username").value;
            var passwordInput = document.getElementById("password").value;

            var usuarioEncontrado = null;// Variable para almacenar el usuario actual

            // Recorrer la lista de usuarios fijos
            for (var i = 0; i < usuarios.length; i++) {
                var usuarioActual = usuarios[i]; // Tomar un usuario del array

                // Comparar si TODO concuerda
                if ((usuarioActual.username === usernameInput || usuarioActual.email === usernameInput) && usuarioActual.password === passwordInput) {
                    usuarioEncontrado = usuarioActual; // Si coincide entra
                    break; 
                }
            }

            // Si encontramos un usuario, redirigir al perfil
            if (usuarioEncontrado) {
                window.location.href = "profile.html?username=" + usuarioEncontrado.username;// Redirigir aL html
            } else {
                 alert("Usuario o contraseña equivobada");// Si no se encontró, mostrar un mensaje de error
            }
        });
    }

