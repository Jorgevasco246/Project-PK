document.addEventListener("DOMContentLoaded", () => {
  const pokemonSeleccionado = JSON.parse(localStorage.getItem("pokemonSeleccionado"));

  if (!pokemonSeleccionado) {
    window.location.href = "Gallery.html";
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
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
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
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
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
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
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
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
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
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
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
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
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
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
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
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
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
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
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
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
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
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
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
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
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
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
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
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
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
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
    }
  ];

 
  const pokemon = pokemones.find(p => p.id === pokemonSeleccionado.id);
  
  if (!pokemon) {
    console.error("Pokémon no encontrado");
    return;
  }

  document.title = pokemon.nombre;


  const pokemonImg = document.getElementById("pokemon-img");
  if (pokemonImg) {
    pokemonImg.src = pokemon.imagen;
    pokemonImg.alt = pokemon.nombre;
  }


  document.querySelector("h1").textContent = pokemon.nombre;
  document.querySelector(".descripcion").textContent = `${pokemon.nombre} es un Pokémon de tipo ${pokemon.tipos.join('/')}.`;
  document.querySelector(".tipo").textContent = pokemon.tipos.join(", ");
  document.querySelector(".peso").textContent = `${pokemon.peso} kg`;
  document.querySelector(".altura").textContent = `${pokemon.altura} m`;
  document.querySelector(".habilidades").textContent = pokemon.habilidades.join(", ");

  
  
  document.querySelector(".hp").textContent = pokemon.hp;
  document.querySelector(".ataque").textContent = pokemon.ataque;
  document.querySelector(".defensa").textContent = pokemon.defensa;
  document.querySelector(".velocidad").textContent = pokemon.velocidad;
  document.querySelector(".ataqueEspecial").textContent = pokemon.ataqueEspecial;
  document.querySelector(".defensaEspecial").textContent = pokemon.defensaEspecial;
});