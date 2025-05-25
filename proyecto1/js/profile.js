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
    var urlParams = new URLSearchParams(window.location.search);
    var loggedInUsername = urlParams.get('username');

    var currentUser = null;

    if (loggedInUsername) {
        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].username === loggedInUsername) {
                currentUser = usuarios[i];
                break;
            }
        }
    }

    if (currentUser) {
        document.getElementById("profileUsername").textContent = currentUser.username;
        document.getElementById("profileFullName").textContent = currentUser.fullName;
        document.getElementById("profileAge").textContent = currentUser.age;
        document.getElementById("profileEmail").textContent = currentUser.email;

   
        if (currentUser.favoritePokemons && currentUser.favoritePokemons.length >= 3) {
            // Primer Pokémon
            const favoritoss1 = document.querySelector(".favoritoss");
            if (favoritoss1) {
        
                const titulo = favoritoss1.querySelector(".espacio");
                favoritoss1.innerHTML = '';
                favoritoss1.appendChild(titulo);
                
 
                const img1 = document.createElement("img");
                img1.src = currentUser.favoritePokemons[0].imagen;
                img1.alt = currentUser.favoritePokemons[0].nombre;
                img1.style.width = "150px";
                img1.style.marginTop = "15px";
                favoritoss1.appendChild(img1);
                
            
                const nombrePokemon1 = document.createElement("h2");
                nombrePokemon1.className = "nombredepokemon";
                nombrePokemon1.textContent = currentUser.favoritePokemons[0].nombre;
                nombrePokemon1.style.marginTop = "10px";
                favoritoss1.appendChild(nombrePokemon1);
     
                const descripcion1 = document.createElement("p");
                descripcion1.id = "descripcion";
                descripcion1.textContent = currentUser.favoritePokemons[0].descripcion;
                favoritoss1.appendChild(descripcion1);
            }
            
            // Segundo Pokémon
            const favoritoss2 = document.querySelector(".favoritoss2");
            if (favoritoss2) {

                const titulo = favoritoss2.querySelector(".espacio");
                favoritoss2.innerHTML = '';
                favoritoss2.appendChild(titulo);

                const img2 = document.createElement("img");
                img2.src = currentUser.favoritePokemons[1].imagen;
                img2.alt = currentUser.favoritePokemons[1].nombre;
                img2.style.width = "150px";
                img2.style.marginTop = "15px";
                favoritoss2.appendChild(img2);
                
     
                const nombrePokemon2 = document.createElement("h2");
                nombrePokemon2.className = "nombredepokemon";
                nombrePokemon2.textContent = currentUser.favoritePokemons[1].nombre;
                nombrePokemon2.style.marginTop = "10px";
                favoritoss2.appendChild(nombrePokemon2);
   
                const descripcion2 = document.createElement("p");
                descripcion2.id = "descripcion";
                descripcion2.textContent = currentUser.favoritePokemons[1].descripcion;
                favoritoss2.appendChild(descripcion2);
            }
            
            // Tercer Pokémon
            const favoritoss3 = document.querySelector(".favoritoss3");
            if (favoritoss3) {
          
                const titulo = favoritoss3.querySelector(".espacio");
                favoritoss3.innerHTML = '';
                favoritoss3.appendChild(titulo);
       
                const img3 = document.createElement("img");
                img3.src = currentUser.favoritePokemons[2].imagen;
                img3.alt = currentUser.favoritePokemons[2].nombre;
                img3.style.width = "150px";
                img3.style.marginTop = "15px";
                favoritoss3.appendChild(img3);
                
           
                const nombrePokemon3 = document.createElement("h2");
                nombrePokemon3.className = "nombredepokemon";
                nombrePokemon3.textContent = currentUser.favoritePokemons[2].nombre;
                nombrePokemon3.style.marginTop = "10px";
                favoritoss3.appendChild(nombrePokemon3);
                
               
                const descripcion3 = document.createElement("p");
                descripcion3.id = "descripcion";
                descripcion3.textContent = currentUser.favoritePokemons[2].descripcion;
                favoritoss3.appendChild(descripcion3);
            }
        }
    } else {
        window.location.href = "login.html";
    }
    
    var logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            window.location.href = "login.html";
        });
    }
});