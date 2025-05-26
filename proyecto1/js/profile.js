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
        favoritePokemons: [
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
    
    let loggedInUsername = localStorage.getItem('loggedInUsername');

    if (!loggedInUsername) {
        const urlParams = new URLSearchParams(window.location.search);
        loggedInUsername = urlParams.get('username');
    }

    const currentUser = usuarios.find(user => user.username === loggedInUsername);

    if (currentUser) {
        document.getElementById("profileUsername").textContent = currentUser.username;
        document.getElementById("profileFullName").textContent = currentUser.fullName;
        document.getElementById("profileAge").textContent = currentUser.age;
        document.getElementById("profileEmail").textContent = currentUser.email;

        function renderFavoritePokemon(pokemonData, selector) {
            const container = document.querySelector(selector);
            if (container && pokemonData) {
                const titulo = container.querySelector(".espacio");
                container.innerHTML = '';
                if (titulo) {
                    container.appendChild(titulo);
                }

                const img = document.createElement("img");
                img.src = pokemonData.imagen;
                img.alt = pokemonData.nombre;
                container.appendChild(img);

                const nombrePokemon = document.createElement("h2");
                nombrePokemon.className = "nombredepokemon";
                nombrePokemon.textContent = pokemonData.nombre;
                container.appendChild(nombrePokemon);

                const descripcion = document.createElement("p");
                descripcion.id = "descripcion";
                descripcion.textContent = pokemonData.descripcion;
                container.appendChild(descripcion);
            }
        }

        if (currentUser.favoritePokemons && currentUser.favoritePokemons.length > 0) {
            renderFavoritePokemon(currentUser.favoritePokemons[0], ".favoriteprofile:nth-child(1) .favoritoss");
            renderFavoritePokemon(currentUser.favoritePokemons[1], ".favoriteprofile:nth-child(2) .favoritoss2");
            renderFavoritePokemon(currentUser.favoritePokemons[2], ".favoriteprofile:nth-child(3) .favoritoss3");
        }

        const moreInfoButtons = document.querySelectorAll(".more-info-btn");
        moreInfoButtons.forEach(button => {
            button.addEventListener("click", function() {
                const pokemonIndex = parseInt(this.dataset.pokemonIndex);
                if (currentUser.favoritePokemons && currentUser.favoritePokemons[pokemonIndex]) {
                    const pokemonData = currentUser.favoritePokemons[pokemonIndex];
                    localStorage.setItem("pokemonSeleccionado", JSON.stringify(pokemonData));
                    window.location.href = "more-info.html";
                } else {
                    console.error("No se encontró el Pokémon en el índice:", pokemonIndex);
                }
            });
        });
    } else {
        window.location.href = "login.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            localStorage.removeItem('loggedInUsername');
            window.location.href = "login.html";
        });
    }
});