document.addEventListener("DOMContentLoaded", () => {
  const pokemonSeleccionado = JSON.parse(localStorage.getItem("pokemonSeleccionado"));

  if (!pokemonSeleccionado) {
    window.location.href = "Gallery.html";
    return;
  }

  // Cargar datos del Pokémon desde la API
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSeleccionado.id}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('No se pudo obtener la información del Pokémon');
      }
      return response.json();
    })
    .then(function (pokemon) {
      // Actualizar el título de la página
      var nombre = pokemon.name;
      nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
      document.title = nombre;

      // Actualizar la imagen del Pokémon
      var pokemonImg = document.getElementById("pokemon-img");
      if (pokemonImg) {
        pokemonImg.src = pokemon.sprites.other['official-artwork'].front_default;
        pokemonImg.alt = nombre;
      }

      // Obtener los tipos del Pokémon
      var tipos = "";
      for (var i = 0; i < pokemon.types.length; i++) {
        if (i > 0) {
          tipos += "/";
        }
        tipos += pokemon.types[i].type.name;
      }

      // Obtener las habilidades del Pokémon
      var habilidades = "";
      for (var i = 0; i < pokemon.abilities.length; i++) {
        if (i > 0) {
          habilidades += ", ";
        }
        habilidades += pokemon.abilities[i].ability.name;
      }

      // Actualizar la información del Pokémon en la página
      document.querySelector("h1").textContent = nombre;
      document.querySelector(".descripcion").textContent = nombre + " es un Pokémon de tipo " + tipos + ".";
      document.querySelector(".tipo").textContent = tipos.replace(/\//g, ", ");
      document.querySelector(".peso").textContent = (pokemon.weight / 10).toFixed(1) + " kg";
      document.querySelector(".altura").textContent = (pokemon.height / 10).toFixed(1) + " m";
      document.querySelector(".habilidades").textContent = habilidades;

      // Actualizar las estadísticas del Pokémon
      var hp = 0;
      var ataque = 0;
      var defensa = 0;
      var velocidad = 0;
      var ataqueEspecial = 0;
      var defensaEspecial = 0;

      for (var i = 0; i < pokemon.stats.length; i++) {
        var statName = pokemon.stats[i].stat.name;
        var statValue = pokemon.stats[i].base_stat;

        if (statName === 'hp') {
          hp = statValue;
        } else if (statName === 'attack') {
          ataque = statValue;
        } else if (statName === 'defense') {
          defensa = statValue;
        } else if (statName === 'speed') {
          velocidad = statValue;
        } else if (statName === 'special-attack') {
          ataqueEspecial = statValue;
        } else if (statName === 'special-defense') {
          defensaEspecial = statValue;
        }
      }

      document.querySelector(".hp").textContent = hp;
      document.querySelector(".ataque").textContent = ataque;
      document.querySelector(".defensa").textContent = defensa;
      document.querySelector(".velocidad").textContent = velocidad;
      document.querySelector(".ataqueEspecial").textContent = ataqueEspecial;
      document.querySelector(".defensaEspecial").textContent = defensaEspecial;
    })
    .catch(function (error) {
      console.error("Error al cargar el Pokémon:", error);
      alert("No se pudo cargar la información del Pokémon. Volviendo a la galería...");
      window.location.href = "Gallery.html";
    });
});



const galeria = document.querySelector("#galeria2");
const TOTAL_POKEMON = 15;

function createCard(name, imageURL, tipos, index) {
  var div = document.createElement("div");
  div.classList.add("pokem");

  var nombre = document.createElement("h3");
  nombre.textContent = name.charAt(0).toUpperCase() + name.slice(1);

  var imagen = document.createElement("img");
  imagen.src = imageURL;
  imagen.alt = name;

  var descripcion = document.createElement("p");

  var tiposTexto = "";
  for (var i = 0; i < tipos.length; i++) {
    if (i > 0) {
      tiposTexto += "/";
    }
    tiposTexto += tipos[i];
  }
descripcion.textContent = name + " is a " + tiposTexto + " type Pokémon.";

  var botonInfo = document.createElement("button");
  botonInfo.textContent = "More information";
  botonInfo.onclick = function() {
    var pokemonSeleccionado = {
      id: index,
      nombre: name.charAt(0).toUpperCase() + name.slice(1)
    };
    localStorage.setItem("pokemonSeleccionado", JSON.stringify(pokemonSeleccionado));
    window.location.href = "producto.html";
  };

  var botonFav = document.createElement("button");
  botonFav.textContent = "Add to favorites";
  botonFav.classList.add("favoritos");

  div.appendChild(imagen);
  div.appendChild(nombre);
  div.appendChild(descripcion);
  div.appendChild(botonInfo);
  div.appendChild(botonFav);
  return div;
}

for (var index = 1; index <= TOTAL_POKEMON; index++) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + index)
    .then(function(res) {
      return res.json();
    })
    .then(function(pokemon) {
      var tipos = [];
      for (var i = 0; i < pokemon.types.length; i++) {
        tipos.push(pokemon.types[i].type.name);
      }
      
      var card = createCard(
        pokemon.name,
        pokemon.sprites.other['official-artwork'].front_default,
        tipos,
        pokemon.id
      );
      
      galeria.appendChild(card);
    })
    .catch(function(error) {
      console.error("Error al obtener Pokémon:", error);
    });
}

