// js/more-info.js

document.addEventListener("DOMContentLoaded", () => {
    const pokemonSeleccionadoBasico = JSON.parse(localStorage.getItem("pokemonSeleccionado"));

   
    if (!pokemonSeleccionadoBasico || !pokemonSeleccionadoBasico.id) {
        console.warn("No se encontró información del Pokémon seleccionado. Redirigiendo al perfil.");
        window.location.href = "profile.html"; // Redirige a tu página de perfil
        return;
    }
    const pokemones = [
        {
            id: 1,
            nombre: "Bulbasaur",
            tipos: ["grass", "poison"],
            peso: 6.9,
            altura: 0.7,
            habilidades: ["overgrow", "chlorophyll"],
            hp: 45,
            ataque: 49,
            defensa: 49,
            velocidad: 45,
            ataqueEspecial: 65,
            defensaEspecial: 65,
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            descripcion: "A plant Pokémon that carries a large seed on its back." // Añadida descripción para consistencia
        },
        {
            id: 2,
            nombre: "Ivysaur",
            tipos: ["grass", "poison"],
            peso: 13.0,
            altura: 1.0,
            habilidades: ["overgrow", "chlorophyll"],
            hp: 60,
            ataque: 62,
            defensa: 63,
            velocidad: 60,
            ataqueEspecial: 80,
            defensaEspecial: 80,
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
            descripcion: "A Grass/Poison-type Pokémon that has a flower bud on its back."
        },
        {
            id: 3,
            nombre: "Venusaur",
            tipos: ["grass", "poison"],
            peso: 100.0,
            altura: 2.0,
            habilidades: ["overgrow", "chlorophyll"],
            hp: 80,
            ataque: 82,
            defensa: 83,
            velocidad: 80,
            ataqueEspecial: 100,
            defensaEspecial: 100,
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
            descripcion: "Plant/poison type Pokémon with a large flower on its back."
        },
        {
            id: 4,
            nombre: "Charmander",
            tipos: ["fire"],
            peso: 8.5,
            altura: 0.6,
            habilidades: ["blaze", "solar-power"],
            hp: 39,
            ataque: 52,
            defensa: 43,
            velocidad: 65,
            ataqueEspecial: 60,
            defensaEspecial: 50,
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            descripcion: "Fire-type Pokémon with a flame in its tail."
        },
        {
            id: 5,
            nombre: "Charmeleon",
            tipos: ["fire"],
            peso: 19.0,
            altura: 1.1,
            habilidades: ["blaze", "solar-power"],
            hp: 58,
            ataque: 64,
            defensa: 58,
            velocidad: 80,
            ataqueEspecial: 80,
            defensaEspecial: 65,
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
            descripcion: "Fire-type Pokémon, evolution of Charmander"
        },
        {
            id: 6,
            nombre: "Charizard",
            tipos: ["fire", "flying"],
            peso: 90.5,
            altura: 1.7,
            habilidades: ["blaze", "solar-power"],
            hp: 78,
            ataque: 84,
            defensa: 78,
            velocidad: 100,
            ataqueEspecial: 109,
            defensaEspecial: 85,
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
            descripcion: "Fire/flying type Pokémon with great attack power."
        },
        {
            id: 7,
            nombre: "Squirtle",
            tipos: ["water"],
            peso: 9.0,
            altura: 0.5,
            habilidades: ["torrent", "rain-dish"],
            hp: 44,
            ataque: 48,
            defensa: 65,
            velocidad: 43,
            ataqueEspecial: 50,
            defensaEspecial: 64,
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
            descripcion: "Water-type Pokémon with a tough shell."
        },
        {
            id: 8,
            nombre: "Wartortle",
            tipos: ["water"],
            peso: 22.5,
            altura: 1.0,
            habilidades: ["torrent", "rain-dish"],
            hp: 59,
            ataque: 63,
            defensa: 80,
            velocidad: 58,
            ataqueEspecial: 65,
            defensaEspecial: 80,
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
            descripcion: "Water-type Pokémon, evolution of Squirtle."
        },
        {
            id: 9,
            nombre: "Blastoise",
            tipos: ["water"],
            peso: 85.5,
            altura: 1.6,
            habilidades: ["torrent", "rain-dish"],
            hp: 79,
            ataque: 83,
            defensa: 100,
            velocidad: 78,
            ataqueEspecial: 85,
            defensaEspecial: 105,
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
            descripcion: "Water-type Pokémon with powerful water cannons"
        },
        {
            id: 10,
            nombre: "Caterpie",
            tipos: ["bug"],
            peso: 2.9,
            altura: 0.3,
            habilidades: ["shield-dust", "run-away"],
            hp: 45,
            ataque: 30,
            defensa: 35,
            velocidad: 45,
            ataqueEspecial: 20,
            defensaEspecial: 20,
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
            descripcion: "A small, green bug Pokémon, often found in forests."
        },
        {
            id: 11,
            nombre: "Metapod",
            tipos: ["bug"],
            peso: 9.9,
            altura: 0.7,
            habilidades: ["shed-skin"],
            hp: 50,
            ataque: 20,
            defensa: 55,
            velocidad: 30,
            ataqueEspecial: 25,
            defensaEspecial: 25,
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
            descripcion: "A cocoon Pokémon, it is hard as steel and waiting to evolve."
        },
        {
            id: 12,
            nombre: "Butterfree",
            tipos: ["bug", "flying"],
            peso: 32.0,
            altura: 1.1,
            habilidades: ["compound-eyes", "tinted-lens"],
            hp: 60,
            ataque: 45,
            defensa: 50,
            velocidad: 70,
            ataqueEspecial: 90,
            defensaEspecial: 80,
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
            descripcion: "Bug/flying Pokémon with beautiful wings"
        },
        {
            id: 13,
            nombre: "Weedle",
            tipos: ["bug", "poison"],
            peso: 3.2,
            altura: 0.3,
            habilidades: ["shield-dust", "run-away"],
            hp: 40,
            ataque: 35,
            defensa: 30,
            velocidad: 50,
            ataqueEspecial: 20,
            defensaEspecial: 20,
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
            descripcion: "A bug Pokémon that stings its enemies with a poisonous stinger."
        },
        {
            id: 14,
            nombre: "Kakuna",
            tipos: ["bug", "poison"],
            peso: 10.0,
            altura: 0.6,
            habilidades: ["shed-skin"],
            hp: 45,
            ataque: 25,
            defensa: 50,
            velocidad: 35,
            ataqueEspecial: 25,
            defensaEspecial: 25,
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
            descripcion: "A bug Pokémon in its cocoon stage, preparing for evolution."
        },
        {
            id: 15,
            nombre: "Beedrill",
            tipos: ["bug", "poison"],
            peso: 29.5,
            altura: 1.0,
            habilidades: ["swarm", "sniper"],
            hp: 65,
            ataque: 90,
            defensa: 40,
            velocidad: 75,
            ataqueEspecial: 45,
            defensaEspecial: 80,
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
            descripcion: "Bug/poison Pokémon with sharp stingers"
        }
    ];

    const pokemonCompleto = pokemones.find(p => p.id === pokemonSeleccionadoBasico.id);

    if (!pokemonCompleto) {
        console.error("Pokémon no encontrado en el array completo de Pokémon con el ID:", pokemonSeleccionadoBasico.id);
        window.location.href = "profile.html"; // Redirigir si no se encuentra
        return;
    }

  
    document.title = pokemonCompleto.nombre;

    const pokemonImg = document.getElementById("pokemon-img");
    if (pokemonImg) {
        pokemonImg.src = pokemonCompleto.imagen;
        pokemonImg.alt = `Imagen de ${pokemonCompleto.nombre}`;
    }

    document.getElementById("pokemon-name").textContent = pokemonCompleto.nombre;
    
    document.getElementById("pokemon-description").textContent = pokemonCompleto.descripcion;

    document.getElementById("pokemon-type").textContent = pokemonCompleto.tipos.join(", ");
    document.getElementById("pokemon-weight").textContent = `${pokemonCompleto.peso} kg`;
    document.getElementById("pokemon-height").textContent = `${pokemonCompleto.altura} m`;
    document.getElementById("pokemon-abilities").textContent = pokemonCompleto.habilidades.join(", ");

    document.getElementById("stat-hp").textContent = pokemonCompleto.hp;
    document.getElementById("stat-attack").textContent = pokemonCompleto.ataque;
    document.getElementById("stat-defense").textContent = pokemonCompleto.defensa;
    document.getElementById("stat-speed").textContent = pokemonCompleto.velocidad;
    document.getElementById("stat-special-attack").textContent = pokemonCompleto.ataqueEspecial;
    document.getElementById("stat-special-defense").textContent = pokemonCompleto.defensaEspecial;
});