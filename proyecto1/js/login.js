// login.js

const usuarios = [
    {
        username: "JuanD",
        fullName: "Juan7816",
        age: "19 years old",
        email: "juand@gmail.com",
        password: "juantio666",
        favoritePokemons: [ 
            {
                id: 6,
                nombre: "Charizard",
                imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
                descripcion: "Fire/flying type Pokémon with great attack power."
            },
            {
                id: 9,
                nombre: "Blastoise",
                imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
                descripcion: "Water-type Pokémon with powerful water cannons"
            },
            {
                id: 3,
                nombre: "Venusaur",
                imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
                descripcion: "Plant/poison type Pokémon with a large flower on its back."
            }
        ]
    },
    {
        username: "Valentina",
        fullName: "LaVALE",
        age: "20 years old",
        email: "vale@gmail.com",
        password: "echevale20",
        favoritePokemons: [ // <-- CAMBIADO DE 'favoritePokemon' a 'favoritePokemons' (array)
            {
                id: 12,
                nombre: "Butterfree",
                imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
                descripcion: "Bug/flying Pokémon with beautiful wings"
            },
            {
                id: 4,
                nombre: "Charmander",
                imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
                descripcion: "Fire-type Pokémon with a flame in its tail."
            },
            {
                id: 7,
                nombre: "Squirtle",
                imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
                descripcion: "Water-type Pokémon with a tough shell."
            }
        ]
    },
    {
        username: "Danielito",
        fullName: "ElDaniel",
        age: "13 years old",
        email: "danirex@gmail.com",
        password: "danielito1234",
        favoritePokemons: [ 
            {
                id: 15,
                nombre: "Beedrill",
                imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
                descripcion: "Bug/poison Pokémon with sharp stingers"
            },
            {
                id: 5,
                nombre: "Charmeleon",
                imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
                descripcion: "Fire-type Pokémon, evolution of Charmander"
            },
            {
                id: 8,
                nombre: "Wartortle",
                imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
                descripcion: "Water-type Pokémon, evolution of Squirtle."
            }
        ]
    }
];

document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.querySelector(".container form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // (evita que la página se recargue)
            var usernameInput = document.getElementById("username").value;
            var passwordInput = document.getElementById("password").value;

            var usuarioEncontrado = null; 
            for (var i = 0; i < usuarios.length; i++) {
                var usuarioActual = usuarios[i]; 

                // Comparar si TODO concuerda
                if ((usuarioActual.username === usernameInput || usuarioActual.email === usernameInput) && usuarioActual.password === passwordInput) {
                    usuarioEncontrado = usuarioActual; 
                    break;
                }
            }

        
            if (usuarioEncontrado) {
                
                localStorage.setItem("loggedInUsername", usuarioEncontrado.username); 

                window.location.href = "profile.html?username=" + usuarioEncontrado.username; 
            } else {
                alert("Usuario o contraseña equivocada"); 
            }
        });
    }
});